import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiAdminUsers(
  args: InferRequestType<typeof client.api.admin.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.admin.users.$post(args, options))
}

export async function getApiArticles(
  args: InferRequestType<typeof client.api.articles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.articles.$get(args, options))
}

export async function postApiArticles(
  args: InferRequestType<typeof client.api.articles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.articles.$post(args, options))
}

export async function getApiArticlesLatest(
  args: InferRequestType<typeof client.api.articles.latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.articles.latest.$get(args, options))
}

export async function getApiArticlesMe(
  args: InferRequestType<typeof client.api.articles.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.articles.me.$get(args, options))
}

export async function getApiArticlesMeAll(
  args: InferRequestType<typeof client.api.articles.me.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.articles.me.all.$get(args, options))
}

export async function getApiArticlesMePublished(
  args: InferRequestType<typeof client.api.articles.me.published.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.articles.me.published.$get(args, options))
}

export async function getApiArticlesMeUnpublished(
  args: InferRequestType<typeof client.api.articles.me.unpublished.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.articles.me.unpublished.$get(args, options))
}

export async function getApiArticlesId(
  args: InferRequestType<(typeof client.api.articles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.articles[':id'].$get(args, options))
}

export async function putApiArticlesId(
  args: InferRequestType<(typeof client.api.articles)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.articles[':id'].$put(args, options))
}

export async function putApiArticlesIdUnpublish(
  args: InferRequestType<(typeof client.api.articles)[':id']['unpublish']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.articles[':id'].unpublish.$put(args, options))
}

export async function getApiArticlesUsernameSlug(
  args: InferRequestType<(typeof client.api.articles)[':username'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.articles[':username'][':slug'].$get(args, options))
}

export async function getApiComments(
  args: InferRequestType<typeof client.api.comments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.comments.$get(args, options))
}

export async function getApiCommentsId(
  args: InferRequestType<(typeof client.api.comments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.comments[':id'].$get(args, options))
}

export async function getApiDisplayAds(options?: ClientRequestOptions) {
  return await parseResponse(client.api.display_ads.$get(undefined, options))
}

export async function postApiDisplayAds(
  args: InferRequestType<typeof client.api.display_ads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.display_ads.$post(args, options))
}

export async function getApiDisplayAdsId(
  args: InferRequestType<(typeof client.api.display_ads)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.display_ads[':id'].$get(args, options))
}

export async function putApiDisplayAdsId(
  args: InferRequestType<(typeof client.api.display_ads)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.display_ads[':id'].$put(args, options))
}

export async function putApiDisplayAdsIdUnpublish(
  args: InferRequestType<(typeof client.api.display_ads)[':id']['unpublish']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.display_ads[':id'].unpublish.$put(args, options))
}

export async function getApiFollowersUsers(
  args: InferRequestType<typeof client.api.followers.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.followers.users.$get(args, options))
}

export async function getApiFollowsTags(options?: ClientRequestOptions) {
  return await parseResponse(client.api.follows.tags.$get(undefined, options))
}

export async function getApiOrganizationsUsername(
  args: InferRequestType<(typeof client.api.organizations)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations[':username'].$get(args, options))
}

export async function getApiOrganizationsUsernameArticles(
  args: InferRequestType<(typeof client.api.organizations)[':username']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations[':username'].articles.$get(args, options))
}

export async function getApiOrganizationsUsernameUsers(
  args: InferRequestType<(typeof client.api.organizations)[':username']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations[':username'].users.$get(args, options))
}

export async function getApiPages(options?: ClientRequestOptions) {
  return await parseResponse(client.api.pages.$get(undefined, options))
}

export async function postApiPages(
  args: InferRequestType<typeof client.api.pages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pages.$post(args, options))
}

export async function getApiPagesId(
  args: InferRequestType<(typeof client.api.pages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pages[':id'].$get(args, options))
}

export async function putApiPagesId(
  args: InferRequestType<(typeof client.api.pages)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pages[':id'].$put(args, options))
}

export async function deleteApiPagesId(
  args: InferRequestType<(typeof client.api.pages)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pages[':id'].$delete(args, options))
}

export async function getApiPodcastEpisodes(
  args: InferRequestType<typeof client.api.podcast_episodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.podcast_episodes.$get(args, options))
}

export async function getApiProfileImagesUsername(
  args: InferRequestType<(typeof client.api.profile_images)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.profile_images[':username'].$get(args, options))
}

export async function postApiReactions(
  args: InferRequestType<typeof client.api.reactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.reactions.$post(args, options))
}

export async function postApiReactionsToggle(
  args: InferRequestType<typeof client.api.reactions.toggle.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.reactions.toggle.$post(args, options))
}

export async function getApiReadinglist(
  args: InferRequestType<typeof client.api.readinglist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.readinglist.$get(args, options))
}

export async function getApiTags(
  args: InferRequestType<typeof client.api.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tags.$get(args, options))
}

export async function getApiUsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.api.users.me.$get(undefined, options))
}

export async function getApiUsersId(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].$get(args, options))
}

export async function putApiUsersIdSuspend(
  args: InferRequestType<(typeof client.api.users)[':id']['suspend']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].suspend.$put(args, options))
}

export async function putApiUsersIdUnpublish(
  args: InferRequestType<(typeof client.api.users)[':id']['unpublish']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].unpublish.$put(args, options))
}

export async function getApiVideos(
  args: InferRequestType<typeof client.api.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.videos.$get(args, options))
}
