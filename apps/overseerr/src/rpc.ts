import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.status.$get(undefined, options))
}

export async function getStatusAppdata(options?: ClientRequestOptions) {
  return await parseResponse(client.status.appdata.$get(undefined, options))
}

export async function getSettingsMain(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.main.$get(undefined, options))
}

export async function postSettingsMain(
  args: InferRequestType<typeof client.settings.main.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.main.$post(args, options))
}

export async function postSettingsMainRegenerate(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.main.regenerate.$post(undefined, options))
}

export async function getSettingsPlex(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.plex.$get(undefined, options))
}

export async function postSettingsPlex(
  args: InferRequestType<typeof client.settings.plex.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.plex.$post(args, options))
}

export async function getSettingsPlexLibrary(
  args: InferRequestType<typeof client.settings.plex.library.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.plex.library.$get(args, options))
}

export async function getSettingsPlexSync(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.plex.sync.$get(undefined, options))
}

export async function postSettingsPlexSync(
  args: InferRequestType<typeof client.settings.plex.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.plex.sync.$post(args, options))
}

export async function getSettingsPlexDevicesServers(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.plex.devices.servers.$get(undefined, options))
}

export async function getSettingsPlexUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.plex.users.$get(undefined, options))
}

export async function getSettingsTautulli(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.tautulli.$get(undefined, options))
}

export async function postSettingsTautulli(
  args: InferRequestType<typeof client.settings.tautulli.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.tautulli.$post(args, options))
}

export async function getSettingsRadarr(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.radarr.$get(undefined, options))
}

export async function postSettingsRadarr(
  args: InferRequestType<typeof client.settings.radarr.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.radarr.$post(args, options))
}

export async function postSettingsRadarrTest(
  args: InferRequestType<typeof client.settings.radarr.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.radarr.test.$post(args, options))
}

export async function putSettingsRadarrRadarrId(
  args: InferRequestType<(typeof client.settings.radarr)[':radarrId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.radarr[':radarrId'].$put(args, options))
}

export async function deleteSettingsRadarrRadarrId(
  args: InferRequestType<(typeof client.settings.radarr)[':radarrId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.radarr[':radarrId'].$delete(args, options))
}

export async function getSettingsRadarrRadarrIdProfiles(
  args: InferRequestType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.radarr[':radarrId'].profiles.$get(args, options))
}

export async function getSettingsSonarr(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.sonarr.$get(undefined, options))
}

export async function postSettingsSonarr(
  args: InferRequestType<typeof client.settings.sonarr.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.sonarr.$post(args, options))
}

export async function postSettingsSonarrTest(
  args: InferRequestType<typeof client.settings.sonarr.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.sonarr.test.$post(args, options))
}

export async function putSettingsSonarrSonarrId(
  args: InferRequestType<(typeof client.settings.sonarr)[':sonarrId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.sonarr[':sonarrId'].$put(args, options))
}

export async function deleteSettingsSonarrSonarrId(
  args: InferRequestType<(typeof client.settings.sonarr)[':sonarrId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.sonarr[':sonarrId'].$delete(args, options))
}

export async function getSettingsPublic(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.public.$get(undefined, options))
}

export async function postSettingsInitialize(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.initialize.$post(undefined, options))
}

export async function getSettingsJobs(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.jobs.$get(undefined, options))
}

export async function postSettingsJobsJobIdRun(
  args: InferRequestType<(typeof client.settings.jobs)[':jobId']['run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.jobs[':jobId'].run.$post(args, options))
}

export async function postSettingsJobsJobIdCancel(
  args: InferRequestType<(typeof client.settings.jobs)[':jobId']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.jobs[':jobId'].cancel.$post(args, options))
}

export async function postSettingsJobsJobIdSchedule(
  args: InferRequestType<(typeof client.settings.jobs)[':jobId']['schedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.jobs[':jobId'].schedule.$post(args, options))
}

export async function getSettingsCache(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.cache.$get(undefined, options))
}

export async function postSettingsCacheCacheIdFlush(
  args: InferRequestType<(typeof client.settings.cache)[':cacheId']['flush']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.cache[':cacheId'].flush.$post(args, options))
}

export async function getSettingsLogs(
  args: InferRequestType<typeof client.settings.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.logs.$get(args, options))
}

export async function getSettingsNotificationsEmail(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.notifications.email.$get(undefined, options))
}

export async function postSettingsNotificationsEmail(
  args: InferRequestType<typeof client.settings.notifications.email.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.email.$post(args, options))
}

export async function postSettingsNotificationsEmailTest(
  args: InferRequestType<typeof client.settings.notifications.email.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.email.test.$post(args, options))
}

export async function getSettingsNotificationsDiscord(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.notifications.discord.$get(undefined, options))
}

export async function postSettingsNotificationsDiscord(
  args: InferRequestType<typeof client.settings.notifications.discord.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.discord.$post(args, options))
}

export async function postSettingsNotificationsDiscordTest(
  args: InferRequestType<typeof client.settings.notifications.discord.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.discord.test.$post(args, options))
}

export async function getSettingsNotificationsLunasea(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.notifications.lunasea.$get(undefined, options))
}

export async function postSettingsNotificationsLunasea(
  args: InferRequestType<typeof client.settings.notifications.lunasea.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.lunasea.$post(args, options))
}

export async function postSettingsNotificationsLunaseaTest(
  args: InferRequestType<typeof client.settings.notifications.lunasea.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.lunasea.test.$post(args, options))
}

export async function getSettingsNotificationsPushbullet(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.notifications.pushbullet.$get(undefined, options))
}

export async function postSettingsNotificationsPushbullet(
  args: InferRequestType<typeof client.settings.notifications.pushbullet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.pushbullet.$post(args, options))
}

export async function postSettingsNotificationsPushbulletTest(
  args: InferRequestType<typeof client.settings.notifications.pushbullet.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.pushbullet.test.$post(args, options))
}

export async function getSettingsNotificationsPushover(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.notifications.pushover.$get(undefined, options))
}

export async function postSettingsNotificationsPushover(
  args: InferRequestType<typeof client.settings.notifications.pushover.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.pushover.$post(args, options))
}

export async function postSettingsNotificationsPushoverTest(
  args: InferRequestType<typeof client.settings.notifications.pushover.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.pushover.test.$post(args, options))
}

export async function getSettingsNotificationsPushoverSounds(
  args: InferRequestType<typeof client.settings.notifications.pushover.sounds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.pushover.sounds.$get(args, options))
}

export async function getSettingsNotificationsGotify(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.notifications.gotify.$get(undefined, options))
}

export async function postSettingsNotificationsGotify(
  args: InferRequestType<typeof client.settings.notifications.gotify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.gotify.$post(args, options))
}

export async function postSettingsNotificationsGotifyTest(
  args: InferRequestType<typeof client.settings.notifications.gotify.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.gotify.test.$post(args, options))
}

export async function getSettingsNotificationsSlack(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.notifications.slack.$get(undefined, options))
}

export async function postSettingsNotificationsSlack(
  args: InferRequestType<typeof client.settings.notifications.slack.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.slack.$post(args, options))
}

export async function postSettingsNotificationsSlackTest(
  args: InferRequestType<typeof client.settings.notifications.slack.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.slack.test.$post(args, options))
}

export async function getSettingsNotificationsTelegram(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.notifications.telegram.$get(undefined, options))
}

export async function postSettingsNotificationsTelegram(
  args: InferRequestType<typeof client.settings.notifications.telegram.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.telegram.$post(args, options))
}

export async function postSettingsNotificationsTelegramTest(
  args: InferRequestType<typeof client.settings.notifications.telegram.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.telegram.test.$post(args, options))
}

export async function getSettingsNotificationsWebpush(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.notifications.webpush.$get(undefined, options))
}

export async function postSettingsNotificationsWebpush(
  args: InferRequestType<typeof client.settings.notifications.webpush.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.webpush.$post(args, options))
}

export async function postSettingsNotificationsWebpushTest(
  args: InferRequestType<typeof client.settings.notifications.webpush.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.webpush.test.$post(args, options))
}

export async function getSettingsNotificationsWebhook(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.notifications.webhook.$get(undefined, options))
}

export async function postSettingsNotificationsWebhook(
  args: InferRequestType<typeof client.settings.notifications.webhook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.webhook.$post(args, options))
}

export async function postSettingsNotificationsWebhookTest(
  args: InferRequestType<typeof client.settings.notifications.webhook.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.notifications.webhook.test.$post(args, options))
}

export async function getSettingsDiscover(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.discover.$get(undefined, options))
}

export async function postSettingsDiscover(
  args: InferRequestType<typeof client.settings.discover.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.discover.$post(args, options))
}

export async function putSettingsDiscoverSliderId(
  args: InferRequestType<(typeof client.settings.discover)[':sliderId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.discover[':sliderId'].$put(args, options))
}

export async function deleteSettingsDiscoverSliderId(
  args: InferRequestType<(typeof client.settings.discover)[':sliderId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.discover[':sliderId'].$delete(args, options))
}

export async function postSettingsDiscoverAdd(
  args: InferRequestType<typeof client.settings.discover.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.discover.add.$post(args, options))
}

export async function getSettingsDiscoverReset(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.discover.reset.$get(undefined, options))
}

export async function getSettingsAbout(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.about.$get(undefined, options))
}

export async function getAuthMe(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.me.$get(undefined, options))
}

export async function postAuthPlex(
  args: InferRequestType<typeof client.auth.plex.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.plex.$post(args, options))
}

export async function postAuthLocal(
  args: InferRequestType<typeof client.auth.local.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.local.$post(args, options))
}

export async function postAuthLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.logout.$post(undefined, options))
}

export async function postAuthResetPassword(
  args: InferRequestType<(typeof client.auth)['reset-password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth['reset-password'].$post(args, options))
}

export async function postAuthResetPasswordGuid(
  args: InferRequestType<(typeof client.auth)['reset-password'][':guid']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth['reset-password'][':guid'].$post(args, options))
}

export async function getUser(
  args: InferRequestType<typeof client.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$get(args, options))
}

export async function putUser(
  args: InferRequestType<typeof client.user.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$put(args, options))
}

export async function postUser(
  args: InferRequestType<typeof client.user.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$post(args, options))
}

export async function postUserImportFromPlex(
  args: InferRequestType<(typeof client.user)['import-from-plex']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user['import-from-plex'].$post(args, options))
}

export async function postUserRegisterPushSubscription(
  args: InferRequestType<typeof client.user.registerPushSubscription.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.registerPushSubscription.$post(args, options))
}

export async function getUserUserIdPushSubscriptions(
  args: InferRequestType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].pushSubscriptions.$get(args, options))
}

export async function getUserUserIdPushSubscriptionEndpoint(
  args: InferRequestType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userId'].pushSubscription[':endpoint'].$get(args, options),
  )
}

export async function deleteUserUserIdPushSubscriptionEndpoint(
  args: InferRequestType<
    (typeof client.user)[':userId']['pushSubscription'][':endpoint']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userId'].pushSubscription[':endpoint'].$delete(args, options),
  )
}

export async function getUserUserId(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].$get(args, options))
}

export async function putUserUserId(
  args: InferRequestType<(typeof client.user)[':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].$put(args, options))
}

export async function deleteUserUserId(
  args: InferRequestType<(typeof client.user)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].$delete(args, options))
}

export async function getUserUserIdRequests(
  args: InferRequestType<(typeof client.user)[':userId']['requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].requests.$get(args, options))
}

export async function getUserUserIdQuota(
  args: InferRequestType<(typeof client.user)[':userId']['quota']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].quota.$get(args, options))
}

export async function getUserUserIdWatchlist(
  args: InferRequestType<(typeof client.user)[':userId']['watchlist']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].watchlist.$get(args, options))
}

export async function getUserUserIdSettingsMain(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['main']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].settings.main.$get(args, options))
}

export async function postUserUserIdSettingsMain(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['main']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].settings.main.$post(args, options))
}

export async function getUserUserIdSettingsPassword(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['password']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].settings.password.$get(args, options))
}

export async function postUserUserIdSettingsPassword(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].settings.password.$post(args, options))
}

export async function getUserUserIdSettingsNotifications(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].settings.notifications.$get(args, options))
}

export async function postUserUserIdSettingsNotifications(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['notifications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].settings.notifications.$post(args, options))
}

export async function getUserUserIdSettingsPermissions(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].settings.permissions.$get(args, options))
}

export async function postUserUserIdSettingsPermissions(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].settings.permissions.$post(args, options))
}

export async function getUserUserIdWatchData(
  args: InferRequestType<(typeof client.user)[':userId']['watch_data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userId'].watch_data.$get(args, options))
}

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function getSearchKeyword(
  args: InferRequestType<typeof client.search.keyword.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.keyword.$get(args, options))
}

export async function getSearchCompany(
  args: InferRequestType<typeof client.search.company.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.company.$get(args, options))
}

export async function getDiscoverMovies(
  args: InferRequestType<typeof client.discover.movies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discover.movies.$get(args, options))
}

export async function getDiscoverMoviesGenreGenreId(
  args: InferRequestType<(typeof client.discover.movies.genre)[':genreId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discover.movies.genre[':genreId'].$get(args, options))
}

export async function getDiscoverMoviesLanguageLanguage(
  args: InferRequestType<(typeof client.discover.movies.language)[':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discover.movies.language[':language'].$get(args, options))
}

export async function getDiscoverMoviesStudioStudioId(
  args: InferRequestType<(typeof client.discover.movies.studio)[':studioId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discover.movies.studio[':studioId'].$get(args, options))
}

export async function getDiscoverMoviesUpcoming(
  args: InferRequestType<typeof client.discover.movies.upcoming.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discover.movies.upcoming.$get(args, options))
}

export async function getDiscoverTv(
  args: InferRequestType<typeof client.discover.tv.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discover.tv.$get(args, options))
}

export async function getDiscoverTvLanguageLanguage(
  args: InferRequestType<(typeof client.discover.tv.language)[':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discover.tv.language[':language'].$get(args, options))
}

export async function getDiscoverTvGenreGenreId(
  args: InferRequestType<(typeof client.discover.tv.genre)[':genreId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discover.tv.genre[':genreId'].$get(args, options))
}

export async function getDiscoverTvNetworkNetworkId(
  args: InferRequestType<(typeof client.discover.tv.network)[':networkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discover.tv.network[':networkId'].$get(args, options))
}

export async function getDiscoverTvUpcoming(
  args: InferRequestType<typeof client.discover.tv.upcoming.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discover.tv.upcoming.$get(args, options))
}

export async function getDiscoverTrending(
  args: InferRequestType<typeof client.discover.trending.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discover.trending.$get(args, options))
}

export async function getDiscoverKeywordKeywordIdMovies(
  args: InferRequestType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discover.keyword[':keywordId'].movies.$get(args, options))
}

export async function getDiscoverGenresliderMovie(
  args: InferRequestType<typeof client.discover.genreslider.movie.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discover.genreslider.movie.$get(args, options))
}

export async function getDiscoverGenresliderTv(
  args: InferRequestType<typeof client.discover.genreslider.tv.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discover.genreslider.tv.$get(args, options))
}

export async function getDiscoverWatchlist(
  args: InferRequestType<typeof client.discover.watchlist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discover.watchlist.$get(args, options))
}

export async function getRequest(
  args: InferRequestType<typeof client.request.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.request.$get(args, options))
}

export async function postRequest(
  args: InferRequestType<typeof client.request.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.request.$post(args, options))
}

export async function getRequestCount(options?: ClientRequestOptions) {
  return await parseResponse(client.request.count.$get(undefined, options))
}

export async function getRequestRequestId(
  args: InferRequestType<(typeof client.request)[':requestId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.request[':requestId'].$get(args, options))
}

export async function putRequestRequestId(
  args: InferRequestType<(typeof client.request)[':requestId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.request[':requestId'].$put(args, options))
}

export async function deleteRequestRequestId(
  args: InferRequestType<(typeof client.request)[':requestId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.request[':requestId'].$delete(args, options))
}

export async function postRequestRequestIdRetry(
  args: InferRequestType<(typeof client.request)[':requestId']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.request[':requestId'].retry.$post(args, options))
}

export async function postRequestRequestIdStatus(
  args: InferRequestType<(typeof client.request)[':requestId'][':status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.request[':requestId'][':status'].$post(args, options))
}

export async function getMovieMovieId(
  args: InferRequestType<(typeof client.movie)[':movieId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movie[':movieId'].$get(args, options))
}

export async function getMovieMovieIdRecommendations(
  args: InferRequestType<(typeof client.movie)[':movieId']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movie[':movieId'].recommendations.$get(args, options))
}

export async function getMovieMovieIdSimilar(
  args: InferRequestType<(typeof client.movie)[':movieId']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movie[':movieId'].similar.$get(args, options))
}

export async function getMovieMovieIdRatings(
  args: InferRequestType<(typeof client.movie)[':movieId']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movie[':movieId'].ratings.$get(args, options))
}

export async function getMovieMovieIdRatingscombined(
  args: InferRequestType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movie[':movieId'].ratingscombined.$get(args, options))
}

export async function getTvTvId(
  args: InferRequestType<(typeof client.tv)[':tvId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tv[':tvId'].$get(args, options))
}

export async function getTvTvIdSeasonSeasonId(
  args: InferRequestType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tv[':tvId'].season[':seasonId'].$get(args, options))
}

export async function getTvTvIdRecommendations(
  args: InferRequestType<(typeof client.tv)[':tvId']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tv[':tvId'].recommendations.$get(args, options))
}

export async function getTvTvIdSimilar(
  args: InferRequestType<(typeof client.tv)[':tvId']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tv[':tvId'].similar.$get(args, options))
}

export async function getTvTvIdRatings(
  args: InferRequestType<(typeof client.tv)[':tvId']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tv[':tvId'].ratings.$get(args, options))
}

export async function getPersonPersonId(
  args: InferRequestType<(typeof client.person)[':personId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.person[':personId'].$get(args, options))
}

export async function getPersonPersonIdCombinedCredits(
  args: InferRequestType<(typeof client.person)[':personId']['combined_credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.person[':personId'].combined_credits.$get(args, options))
}

export async function getMedia(
  args: InferRequestType<typeof client.media.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media.$get(args, options))
}

export async function deleteMediaMediaId(
  args: InferRequestType<(typeof client.media)[':mediaId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':mediaId'].$delete(args, options))
}

export async function postMediaMediaIdStatus(
  args: InferRequestType<(typeof client.media)[':mediaId'][':status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':mediaId'][':status'].$post(args, options))
}

export async function getMediaMediaIdWatchData(
  args: InferRequestType<(typeof client.media)[':mediaId']['watch_data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media[':mediaId'].watch_data.$get(args, options))
}

export async function getCollectionCollectionId(
  args: InferRequestType<(typeof client.collection)[':collectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collection[':collectionId'].$get(args, options))
}

export async function getServiceRadarr(options?: ClientRequestOptions) {
  return await parseResponse(client.service.radarr.$get(undefined, options))
}

export async function getServiceRadarrRadarrId(
  args: InferRequestType<(typeof client.service.radarr)[':radarrId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service.radarr[':radarrId'].$get(args, options))
}

export async function getServiceSonarr(options?: ClientRequestOptions) {
  return await parseResponse(client.service.sonarr.$get(undefined, options))
}

export async function getServiceSonarrSonarrId(
  args: InferRequestType<(typeof client.service.sonarr)[':sonarrId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service.sonarr[':sonarrId'].$get(args, options))
}

export async function getServiceSonarrLookupTmdbId(
  args: InferRequestType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service.sonarr.lookup[':tmdbId'].$get(args, options))
}

export async function getRegions(options?: ClientRequestOptions) {
  return await parseResponse(client.regions.$get(undefined, options))
}

export async function getLanguages(options?: ClientRequestOptions) {
  return await parseResponse(client.languages.$get(undefined, options))
}

export async function getStudioStudioId(
  args: InferRequestType<(typeof client.studio)[':studioId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studio[':studioId'].$get(args, options))
}

export async function getNetworkNetworkId(
  args: InferRequestType<(typeof client.network)[':networkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.network[':networkId'].$get(args, options))
}

export async function getGenresMovie(
  args: InferRequestType<typeof client.genres.movie.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genres.movie.$get(args, options))
}

export async function getGenresTv(
  args: InferRequestType<typeof client.genres.tv.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genres.tv.$get(args, options))
}

export async function getBackdrops(options?: ClientRequestOptions) {
  return await parseResponse(client.backdrops.$get(undefined, options))
}

export async function getIssue(
  args: InferRequestType<typeof client.issue.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issue.$get(args, options))
}

export async function postIssue(
  args: InferRequestType<typeof client.issue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issue.$post(args, options))
}

export async function getIssueCount(options?: ClientRequestOptions) {
  return await parseResponse(client.issue.count.$get(undefined, options))
}

export async function getIssueIssueId(
  args: InferRequestType<(typeof client.issue)[':issueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issue[':issueId'].$get(args, options))
}

export async function deleteIssueIssueId(
  args: InferRequestType<(typeof client.issue)[':issueId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issue[':issueId'].$delete(args, options))
}

export async function postIssueIssueIdComment(
  args: InferRequestType<(typeof client.issue)[':issueId']['comment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issue[':issueId'].comment.$post(args, options))
}

export async function getIssueCommentCommentId(
  args: InferRequestType<(typeof client.issueComment)[':commentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issueComment[':commentId'].$get(args, options))
}

export async function putIssueCommentCommentId(
  args: InferRequestType<(typeof client.issueComment)[':commentId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issueComment[':commentId'].$put(args, options))
}

export async function deleteIssueCommentCommentId(
  args: InferRequestType<(typeof client.issueComment)[':commentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issueComment[':commentId'].$delete(args, options))
}

export async function postIssueIssueIdStatus(
  args: InferRequestType<(typeof client.issue)[':issueId'][':status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issue[':issueId'][':status'].$post(args, options))
}

export async function getKeywordKeywordId(
  args: InferRequestType<(typeof client.keyword)[':keywordId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keyword[':keywordId'].$get(args, options))
}

export async function getWatchprovidersRegions(options?: ClientRequestOptions) {
  return await parseResponse(client.watchproviders.regions.$get(undefined, options))
}

export async function getWatchprovidersMovies(
  args: InferRequestType<typeof client.watchproviders.movies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchproviders.movies.$get(args, options))
}

export async function getWatchprovidersTv(
  args: InferRequestType<typeof client.watchproviders.tv.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.watchproviders.tv.$get(args, options))
}
