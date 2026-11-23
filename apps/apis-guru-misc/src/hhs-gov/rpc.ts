import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getResourcesJson(
  args: InferRequestType<(typeof client)['resources.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['resources.json'].$get(args, options))
}

export async function getResourcesCampaignsJson(
  args: InferRequestType<(typeof client.resources)['campaigns.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources['campaigns.json'].$get(args, options))
}

export async function getResourcesCampaignsIdJson(
  args: InferRequestType<(typeof client.resources.campaigns)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.campaigns[':id.json'].$get(args, options))
}

export async function getResourcesCampaignsIdMediaJson(
  args: InferRequestType<(typeof client.resources.campaigns)[':id']['media.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.campaigns[':id']['media.json'].$get(args, options))
}

export async function getResourcesCampaignsIdSyndicateFormat(
  args: InferRequestType<(typeof client.resources.campaigns)[':id']['syndicate.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.resources.campaigns[':id']['syndicate.{format}'].$get(args, options),
  )
}

export async function getResourcesLanguagesJson(
  args: InferRequestType<(typeof client.resources)['languages.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources['languages.json'].$get(args, options))
}

export async function getResourcesLanguagesIdJson(
  args: InferRequestType<(typeof client.resources.languages)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.languages[':id.json'].$get(args, options))
}

export async function getResourcesMediaJson(
  args: InferRequestType<(typeof client.resources)['media.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources['media.json'].$get(args, options))
}

export async function getResourcesMediaFeaturedJson(
  args: InferRequestType<(typeof client.resources.media)['featured.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.media['featured.json'].$get(args, options))
}

export async function getResourcesMediaMostPopularMediaFormat(
  args: InferRequestType<(typeof client.resources.media)['mostPopularMedia.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.resources.media['mostPopularMedia.{format}'].$get(args, options),
  )
}

export async function getResourcesMediaSearchResultsJson(
  args: InferRequestType<(typeof client.resources.media)['searchResults.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.media['searchResults.json'].$get(args, options))
}

export async function getResourcesMediaIdJson(
  args: InferRequestType<(typeof client.resources.media)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.media[':id.json'].$get(args, options))
}

export async function getResourcesMediaIdContent(
  args: InferRequestType<(typeof client.resources.media)[':id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.media[':id'].content.$get(args, options))
}

export async function getResourcesMediaIdEmbedJson(
  args: InferRequestType<(typeof client.resources.media)[':id']['embed.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.media[':id']['embed.json'].$get(args, options))
}

export async function getResourcesMediaIdPreviewJpg(
  args: InferRequestType<(typeof client.resources.media)[':id']['preview.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.media[':id']['preview.jpg'].$get(args, options))
}

export async function getResourcesMediaIdRelatedMediaFormat(
  args: InferRequestType<(typeof client.resources.media)[':id']['relatedMedia.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.resources.media[':id']['relatedMedia.{format}'].$get(args, options),
  )
}

export async function getResourcesMediaIdSyndicateFormat(
  args: InferRequestType<(typeof client.resources.media)[':id']['syndicate.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.resources.media[':id']['syndicate.{format}'].$get(args, options),
  )
}

export async function getResourcesMediaIdThumbnailJpg(
  args: InferRequestType<(typeof client.resources.media)[':id']['thumbnail.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.media[':id']['thumbnail.jpg'].$get(args, options))
}

export async function getResourcesMediaIdYoutubeMetaDataJson(
  args: InferRequestType<(typeof client.resources.media)[':id']['youtubeMetaData.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.resources.media[':id']['youtubeMetaData.json'].$get(args, options),
  )
}

export async function getResourcesMediaTypesFormat(
  args: InferRequestType<(typeof client.resources)['mediaTypes.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources['mediaTypes.{format}'].$get(args, options))
}

export async function getResourcesSourcesJson(
  args: InferRequestType<(typeof client.resources)['sources.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources['sources.json'].$get(args, options))
}

export async function getResourcesSourcesIdJson(
  args: InferRequestType<(typeof client.resources.sources)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.sources[':id.json'].$get(args, options))
}

export async function getResourcesSourcesIdSyndicateFormat(
  args: InferRequestType<(typeof client.resources.sources)[':id']['syndicate.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.resources.sources[':id']['syndicate.{format}'].$get(args, options),
  )
}

export async function getResourcesTagsFormat(
  args: InferRequestType<(typeof client.resources)['tags.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources['tags.{format}'].$get(args, options))
}

export async function getResourcesTagsTagLanguagesFormat(
  args: InferRequestType<(typeof client.resources.tags)['tagLanguages.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.tags['tagLanguages.{format}'].$get(args, options))
}

export async function getResourcesTagsTagTypesFormat(
  args: InferRequestType<(typeof client.resources.tags)['tagTypes.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.tags['tagTypes.{format}'].$get(args, options))
}

export async function getResourcesTagsIdFormat(
  args: InferRequestType<(typeof client.resources.tags)[':id.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.tags[':id.{format}'].$get(args, options))
}

export async function getResourcesTagsIdMediaFormat(
  args: InferRequestType<(typeof client.resources.tags)[':id']['media.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.tags[':id']['media.{format}'].$get(args, options))
}

export async function getResourcesTagsIdRelatedFormat(
  args: InferRequestType<(typeof client.resources.tags)[':id']['related.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.tags[':id']['related.{format}'].$get(args, options))
}

export async function getResourcesTagsIdSyndicateFormat(
  args: InferRequestType<(typeof client.resources.tags)[':id']['syndicate.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.tags[':id']['syndicate.{format}'].$get(args, options))
}

export async function getResourcesUserMediaListsIdJson(
  args: InferRequestType<(typeof client.resources.userMediaLists)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resources.userMediaLists[':id.json'].$get(args, options))
}
