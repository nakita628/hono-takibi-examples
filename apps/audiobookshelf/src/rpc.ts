import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiAuthorsId(
  args: InferRequestType<(typeof client.api.authors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.authors[':id'].$get(args, options))
}

export async function deleteApiAuthorsId(
  args: InferRequestType<(typeof client.api.authors)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.authors[':id'].$delete(args, options))
}

export async function patchApiAuthorsId(
  args: InferRequestType<(typeof client.api.authors)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.authors[':id'].$patch(args, options))
}

export async function getApiAuthorsIdImage(
  args: InferRequestType<(typeof client.api.authors)[':id']['image']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.authors[':id'].image.$get(args, options))
}

export async function postApiAuthorsIdImage(
  args: InferRequestType<(typeof client.api.authors)[':id']['image']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.authors[':id'].image.$post(args, options))
}

export async function deleteApiAuthorsIdImage(
  args: InferRequestType<(typeof client.api.authors)[':id']['image']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.authors[':id'].image.$delete(args, options))
}

export async function patchApiAuthorsIdImage(
  args: InferRequestType<(typeof client.api.authors)[':id']['image']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.authors[':id'].image.$patch(args, options))
}

export async function postApiAuthorsIdMatch(
  args: InferRequestType<(typeof client.api.authors)[':id']['match']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.authors[':id'].match.$post(args, options))
}

export async function getApiEmailsSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.api.emails.settings.$get(undefined, options))
}

export async function patchApiEmailsSettings(
  args: InferRequestType<typeof client.api.emails.settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.emails.settings.$patch(args, options))
}

export async function postApiEmailsTest(options?: ClientRequestOptions) {
  return await parseResponse(client.api.emails.test.$post(undefined, options))
}

export async function postApiEmailsEreaderDevices(
  args: InferRequestType<(typeof client.api.emails)['ereader-devices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.emails['ereader-devices'].$post(args, options))
}

export async function postApiEmailsSendEbookToDevice(
  args: InferRequestType<(typeof client.api.emails)['send-ebook-to-device']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.emails['send-ebook-to-device'].$post(args, options))
}

export async function getApiLibraries(options?: ClientRequestOptions) {
  return await parseResponse(client.api.libraries.$get(undefined, options))
}

export async function postApiLibraries(
  args: InferRequestType<typeof client.api.libraries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.libraries.$post(args, options))
}

export async function getApiLibrariesId(
  args: InferRequestType<(typeof client.api.libraries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.libraries[':id'].$get(args, options))
}

export async function deleteApiLibrariesId(
  args: InferRequestType<(typeof client.api.libraries)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.libraries[':id'].$delete(args, options))
}

export async function patchApiLibrariesId(
  args: InferRequestType<(typeof client.api.libraries)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.libraries[':id'].$patch(args, options))
}

export async function getApiLibrariesIdAuthors(
  args: InferRequestType<(typeof client.api.libraries)[':id']['authors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.libraries[':id'].authors.$get(args, options))
}

export async function getApiLibrariesIdItems(
  args: InferRequestType<(typeof client.api.libraries)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.libraries[':id'].items.$get(args, options))
}

export async function deleteApiLibrariesIdIssues(
  args: InferRequestType<(typeof client.api.libraries)[':id']['issues']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.libraries[':id'].issues.$delete(args, options))
}

export async function getApiLibrariesIdSeries(
  args: InferRequestType<(typeof client.api.libraries)[':id']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.libraries[':id'].series.$get(args, options))
}

export async function getApiLibrariesIdSeriesSeriesId(
  args: InferRequestType<(typeof client.api.libraries)[':id']['series'][':seriesId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.libraries[':id'].series[':seriesId'].$get(args, options))
}

export async function getApiNotifications(options?: ClientRequestOptions) {
  return await parseResponse(client.api.notifications.$get(undefined, options))
}

export async function postApiNotifications(
  args: InferRequestType<typeof client.api.notifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.notifications.$post(args, options))
}

export async function patchApiNotifications(
  args: InferRequestType<typeof client.api.notifications.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.notifications.$patch(args, options))
}

export async function getApiNotificationdata(options?: ClientRequestOptions) {
  return await parseResponse(client.api.notificationdata.$get(undefined, options))
}

export async function getApiNotificationsTest(
  args: InferRequestType<typeof client.api.notifications.test.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.notifications.test.$get(args, options))
}

export async function deleteApiNotificationsId(
  args: InferRequestType<(typeof client.api.notifications)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.notifications[':id'].$delete(args, options))
}

export async function patchApiNotificationsId(
  args: InferRequestType<(typeof client.api.notifications)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.notifications[':id'].$patch(args, options))
}

export async function getApiNotificationsIdTest(
  args: InferRequestType<(typeof client.api.notifications)[':id']['test']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.notifications[':id'].test.$get(args, options))
}

export async function postApiPodcasts(
  args: InferRequestType<typeof client.api.podcasts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.podcasts.$post(args, options))
}

export async function postApiPodcastsFeed(
  args: InferRequestType<typeof client.api.podcasts.feed.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.podcasts.feed.$post(args, options))
}

export async function postApiPodcastsOpmlParse(
  args: InferRequestType<typeof client.api.podcasts.opml.parse.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.podcasts.opml.parse.$post(args, options))
}

export async function postApiPodcastsOpmlCreate(
  args: InferRequestType<typeof client.api.podcasts.opml.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.podcasts.opml.create.$post(args, options))
}

export async function getApiPodcastsIdChecknew(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['checknew']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.podcasts[':id'].checknew.$get(args, options))
}

export async function getApiPodcastsIdClearQueue(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['clear-queue']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.podcasts[':id']['clear-queue'].$get(args, options))
}

export async function getApiPodcastsIdDownloads(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['downloads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.podcasts[':id'].downloads.$get(args, options))
}

export async function getApiPodcastsIdSearchEpisode(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['search-episode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.podcasts[':id']['search-episode'].$get(args, options))
}

export async function postApiPodcastsIdDownloadEpisodes(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['download-episodes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.podcasts[':id']['download-episodes'].$post(args, options))
}

export async function postApiPodcastsIdMatchEpisodes(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['match-episodes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.podcasts[':id']['match-episodes'].$post(args, options))
}

export async function getApiPodcastsIdEpisodeEpisodeId(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.podcasts[':id'].episode[':episodeId'].$get(args, options))
}

export async function deleteApiPodcastsIdEpisodeEpisodeId(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.podcasts[':id'].episode[':episodeId'].$delete(args, options),
  )
}

export async function patchApiPodcastsIdEpisodeEpisodeId(
  args: InferRequestType<(typeof client.api.podcasts)[':id']['episode'][':episodeId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.podcasts[':id'].episode[':episodeId'].$patch(args, options))
}

export async function getApiSeriesId(
  args: InferRequestType<(typeof client.api.series)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.series[':id'].$get(args, options))
}

export async function patchApiSeriesId(
  args: InferRequestType<(typeof client.api.series)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.series[':id'].$patch(args, options))
}
