import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiFacebookPostsByUri(
  args: InferRequestType<typeof client.api.FacebookPosts.ByUri.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.FacebookPosts.ByUri.$get(args, options))
}

export async function getApiHome(
  args: InferRequestType<typeof client.api.Home.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Home.$get(args, options))
}

export async function getApiMinistries(
  args: InferRequestType<typeof client.api.Ministries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Ministries.$get(args, options))
}

export async function getApiMinistriesKey(
  args: InferRequestType<(typeof client.api.Ministries)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Ministries[':key'].$get(args, options))
}

export async function getApiMinistriesKeyMinister(
  args: InferRequestType<(typeof client.api.Ministries)[':key']['Minister']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Ministries[':key'].Minister.$get(args, options))
}

export async function getApiNewsletters(
  args: InferRequestType<typeof client.api.Newsletters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Newsletters.$get(args, options))
}

export async function getApiNewslettersImagesGuid(
  args: InferRequestType<(typeof client.api.Newsletters.Images)[':guid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Newsletters.Images[':guid'].$get(args, options))
}

export async function getApiNewslettersNewsletterKey(
  args: InferRequestType<(typeof client.api.Newsletters)[':newsletterKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Newsletters[':newsletterKey'].$get(args, options))
}

export async function getApiNewslettersNewsletterKeyEditionsEditionKey(
  args: InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Newsletters[':newsletterKey'].Editions[':editionKey'].$get(args, options),
  )
}

export async function getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKey(
  args: InferRequestType<
    (typeof client.api.Newsletters)[':newsletterKey']['Editions'][':editionKey']['Articles'][':articleKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Newsletters[':newsletterKey'].Editions[':editionKey'].Articles[':articleKey'].$get(
      args,
      options,
    ),
  )
}

export async function getApiPosts(
  args: InferRequestType<typeof client.api.Posts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Posts.$get(args, options))
}

export async function getApiPostsKeysIndexKindIndexKey(
  args: InferRequestType<(typeof client.api.Posts.Keys)[':indexKind'][':indexKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Posts.Keys[':indexKind'][':indexKey'].$get(args, options))
}

export async function getApiPostsKeysReference(
  args: InferRequestType<(typeof client.api.Posts.Keys)[':reference']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Posts.Keys[':reference'].$get(args, options))
}

export async function getApiPostsLatestIndexKindIndexKey(
  args: InferRequestType<(typeof client.api.Posts.Latest)[':indexKind'][':indexKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Posts.Latest[':indexKind'][':indexKey'].$get(args, options))
}

export async function getApiPostsLatestMediaUriMediaType(
  args: InferRequestType<(typeof client.api.Posts.LatestMediaUri)[':mediaType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Posts.LatestMediaUri[':mediaType'].$get(args, options))
}

export async function getApiPostsKey(
  args: InferRequestType<(typeof client.api.Posts)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Posts[':key'].$get(args, options))
}

export async function getApiResourceLinks(
  args: InferRequestType<typeof client.api.ResourceLinks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ResourceLinks.$get(args, options))
}

export async function getApiSectors(
  args: InferRequestType<typeof client.api.Sectors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Sectors.$get(args, options))
}

export async function getApiSectorsKey(
  args: InferRequestType<(typeof client.api.Sectors)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Sectors[':key'].$get(args, options))
}

export async function getApiServices(
  args: InferRequestType<typeof client.api.Services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Services.$get(args, options))
}

export async function getApiServicesKey(
  args: InferRequestType<(typeof client.api.Services)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Services[':key'].$get(args, options))
}

export async function getApiSlides(
  args: InferRequestType<typeof client.api.Slides.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Slides.$get(args, options))
}

export async function getApiSlidesId(
  args: InferRequestType<(typeof client.api.Slides)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Slides[':id'].$get(args, options))
}

export async function getApiTags(
  args: InferRequestType<typeof client.api.Tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Tags.$get(args, options))
}

export async function getApiTagsKey(
  args: InferRequestType<(typeof client.api.Tags)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Tags[':key'].$get(args, options))
}

export async function getApiThemes(
  args: InferRequestType<typeof client.api.Themes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Themes.$get(args, options))
}

export async function getApiThemesKey(
  args: InferRequestType<(typeof client.api.Themes)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Themes[':key'].$get(args, options))
}
