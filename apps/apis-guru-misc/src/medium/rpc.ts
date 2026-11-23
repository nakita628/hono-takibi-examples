import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getArticleArticleId(
  args: InferRequestType<(typeof client.article)[':article_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.article[':article_id'].$get(args, options))
}

export async function getArticleArticleIdContent(
  args: InferRequestType<(typeof client.article)[':article_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.article[':article_id'].content.$get(args, options))
}

export async function getArticleArticleIdFans(
  args: InferRequestType<(typeof client.article)[':article_id']['fans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.article[':article_id'].fans.$get(args, options))
}

export async function getArticleArticleIdMarkdown(
  args: InferRequestType<(typeof client.article)[':article_id']['markdown']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.article[':article_id'].markdown.$get(args, options))
}

export async function getArticleArticleIdRelated(
  args: InferRequestType<(typeof client.article)[':article_id']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.article[':article_id'].related.$get(args, options))
}

export async function getArticleArticleIdResponses(
  args: InferRequestType<(typeof client.article)[':article_id']['responses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.article[':article_id'].responses.$get(args, options))
}

export async function getLatestpostsTopicSlug(
  args: InferRequestType<(typeof client.latestposts)[':topic_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.latestposts[':topic_slug'].$get(args, options))
}

export async function getListListId(
  args: InferRequestType<(typeof client.list)[':list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.list[':list_id'].$get(args, options))
}

export async function getListListIdArticles(
  args: InferRequestType<(typeof client.list)[':list_id']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.list[':list_id'].articles.$get(args, options))
}

export async function getListListIdResponses(
  args: InferRequestType<(typeof client.list)[':list_id']['responses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.list[':list_id'].responses.$get(args, options))
}

export async function getPublicationIdForPublicationSlug(
  args: InferRequestType<(typeof client.publication.id_for)[':publication_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publication.id_for[':publication_slug'].$get(args, options))
}

export async function getPublicationPublicationId(
  args: InferRequestType<(typeof client.publication)[':publication_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publication[':publication_id'].$get(args, options))
}

export async function getPublicationPublicationIdArticles(
  args: InferRequestType<(typeof client.publication)[':publication_id']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publication[':publication_id'].articles.$get(args, options))
}

export async function getPublicationPublicationIdNewsletter(
  args: InferRequestType<(typeof client.publication)[':publication_id']['newsletter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.publication[':publication_id'].newsletter.$get(args, options))
}

export async function getRelatedTagsTag(
  args: InferRequestType<(typeof client.related_tags)[':tag']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.related_tags[':tag'].$get(args, options))
}

export async function getSearchArticlesQueryQuery(
  args: InferRequestType<(typeof client.search)['articles?query=:query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search['articles?query=:query'].$get(args, options))
}

export async function getSearchListsQueryQuery(
  args: InferRequestType<(typeof client.search)['lists?query=:query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search['lists?query=:query'].$get(args, options))
}

export async function getSearchPublicationsQueryQuery(
  args: InferRequestType<(typeof client.search)['publications?query=:query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search['publications?query=:query'].$get(args, options))
}

export async function getSearchTagsQueryQuery(
  args: InferRequestType<(typeof client.search)['tags?query=:query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search['tags?query=:query'].$get(args, options))
}

export async function getSearchUsersQueryQuery(
  args: InferRequestType<(typeof client.search)['users?query=:query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search['users?query=:query'].$get(args, options))
}

export async function getTopWriterTopicSlug(
  args: InferRequestType<(typeof client.top_writer)[':topic_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.top_writer[':topic_slug'].$get(args, options))
}

export async function getTopfeedsTagMode(
  args: InferRequestType<(typeof client.topfeeds)[':tag'][':mode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.topfeeds[':tag'][':mode'].$get(args, options))
}

export async function getUserIdForUsername(
  args: InferRequestType<(typeof client.user.id_for)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.id_for[':username'].$get(args, options))
}

export async function getUserUserId(
  args: InferRequestType<(typeof client.user)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':user_id'].$get(args, options))
}

export async function getUserUserIdArticles(
  args: InferRequestType<(typeof client.user)[':user_id']['articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':user_id'].articles.$get(args, options))
}

export async function getUserUserIdFollowers(
  args: InferRequestType<(typeof client.user)[':user_id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':user_id'].followers.$get(args, options))
}

export async function getUserUserIdFollowing(
  args: InferRequestType<(typeof client.user)[':user_id']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':user_id'].following.$get(args, options))
}

export async function getUserUserIdInterests(
  args: InferRequestType<(typeof client.user)[':user_id']['interests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':user_id'].interests.$get(args, options))
}

export async function getUserUserIdLists(
  args: InferRequestType<(typeof client.user)[':user_id']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':user_id'].lists.$get(args, options))
}

export async function getUserUserIdPublications(
  args: InferRequestType<(typeof client.user)[':user_id']['publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':user_id'].publications.$get(args, options))
}

export async function getUserUserIdTopArticles(
  args: InferRequestType<(typeof client.user)[':user_id']['top_articles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':user_id'].top_articles.$get(args, options))
}
