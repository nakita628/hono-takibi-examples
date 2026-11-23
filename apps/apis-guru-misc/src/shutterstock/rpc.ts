import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2AiAudioDescriptors(
  args: InferRequestType<typeof client.v2.ai.audio.descriptors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.ai.audio.descriptors.$get(args, options))
}

export async function getV2AiAudioInstruments(
  args: InferRequestType<typeof client.v2.ai.audio.instruments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.ai.audio.instruments.$get(args, options))
}

export async function getV2AiAudioRenders(
  args: InferRequestType<typeof client.v2.ai.audio.renders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.ai.audio.renders.$get(args, options))
}

export async function postV2AiAudioRenders(
  args: InferRequestType<typeof client.v2.ai.audio.renders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.ai.audio.renders.$post(args, options))
}

export async function getV2Audio(
  args: InferRequestType<typeof client.v2.audio.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.$get(args, options))
}

export async function getV2AudioCollections(
  args: InferRequestType<typeof client.v2.audio.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.collections.$get(args, options))
}

export async function postV2AudioCollections(
  args: InferRequestType<typeof client.v2.audio.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.collections.$post(args, options))
}

export async function getV2AudioCollectionsId(
  args: InferRequestType<(typeof client.v2.audio.collections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.collections[':id'].$get(args, options))
}

export async function postV2AudioCollectionsId(
  args: InferRequestType<(typeof client.v2.audio.collections)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.collections[':id'].$post(args, options))
}

export async function deleteV2AudioCollectionsId(
  args: InferRequestType<(typeof client.v2.audio.collections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.collections[':id'].$delete(args, options))
}

export async function getV2AudioCollectionsIdItems(
  args: InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.collections[':id'].items.$get(args, options))
}

export async function postV2AudioCollectionsIdItems(
  args: InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.collections[':id'].items.$post(args, options))
}

export async function deleteV2AudioCollectionsIdItems(
  args: InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.collections[':id'].items.$delete(args, options))
}

export async function getV2AudioGenres(
  args: InferRequestType<typeof client.v2.audio.genres.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.genres.$get(args, options))
}

export async function getV2AudioInstruments(
  args: InferRequestType<typeof client.v2.audio.instruments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.instruments.$get(args, options))
}

export async function getV2AudioLicenses(
  args: InferRequestType<typeof client.v2.audio.licenses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.licenses.$get(args, options))
}

export async function postV2AudioLicenses(
  args: InferRequestType<typeof client.v2.audio.licenses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.licenses.$post(args, options))
}

export async function postV2AudioLicensesIdDownloads(
  args: InferRequestType<(typeof client.v2.audio.licenses)[':id']['downloads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.licenses[':id'].downloads.$post(args, options))
}

export async function getV2AudioMoods(
  args: InferRequestType<typeof client.v2.audio.moods.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.moods.$get(args, options))
}

export async function getV2AudioSearch(
  args: InferRequestType<typeof client.v2.audio.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio.search.$get(args, options))
}

export async function getV2AudioId(
  args: InferRequestType<(typeof client.v2.audio)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.audio[':id'].$get(args, options))
}

export async function postV2BulkSearchImages(
  args: InferRequestType<typeof client.v2.bulk_search.images.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bulk_search.images.$post(args, options))
}

export async function getV2CatalogCollections(
  args: InferRequestType<typeof client.v2.catalog.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.catalog.collections.$get(args, options))
}

export async function postV2CatalogCollections(
  args: InferRequestType<typeof client.v2.catalog.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.catalog.collections.$post(args, options))
}

export async function deleteV2CatalogCollectionsCollectionId(
  args: InferRequestType<(typeof client.v2.catalog.collections)[':collection_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.catalog.collections[':collection_id'].$delete(args, options))
}

export async function patchV2CatalogCollectionsCollectionId(
  args: InferRequestType<(typeof client.v2.catalog.collections)[':collection_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.catalog.collections[':collection_id'].$patch(args, options))
}

export async function postV2CatalogCollectionsCollectionIdItems(
  args: InferRequestType<
    (typeof client.v2.catalog.collections)[':collection_id']['items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.catalog.collections[':collection_id'].items.$post(args, options),
  )
}

export async function deleteV2CatalogCollectionsCollectionIdItems(
  args: InferRequestType<
    (typeof client.v2.catalog.collections)[':collection_id']['items']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.catalog.collections[':collection_id'].items.$delete(args, options),
  )
}

export async function getV2CatalogSearch(
  args: InferRequestType<typeof client.v2.catalog.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.catalog.search.$get(args, options))
}

export async function getV2Contributors(
  args: InferRequestType<typeof client.v2.contributors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.contributors.$get(args, options))
}

export async function getV2ContributorsContributorId(
  args: InferRequestType<(typeof client.v2.contributors)[':contributor_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.contributors[':contributor_id'].$get(args, options))
}

export async function getV2ContributorsContributorIdCollections(
  args: InferRequestType<(typeof client.v2.contributors)[':contributor_id']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.contributors[':contributor_id'].collections.$get(args, options),
  )
}

export async function getV2ContributorsContributorIdCollectionsId(
  args: InferRequestType<
    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.contributors[':contributor_id'].collections[':id'].$get(args, options),
  )
}

export async function getV2ContributorsContributorIdCollectionsIdItems(
  args: InferRequestType<
    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.contributors[':contributor_id'].collections[':id'].items.$get(args, options),
  )
}

export async function postV2CvImages(
  args: InferRequestType<typeof client.v2.cv.images.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cv.images.$post(args, options))
}

export async function getV2CvKeywords(
  args: InferRequestType<typeof client.v2.cv.keywords.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cv.keywords.$get(args, options))
}

export async function getV2CvSimilarImages(
  args: InferRequestType<typeof client.v2.cv.similar.images.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cv.similar.images.$get(args, options))
}

export async function getV2CvSimilarVideos(
  args: InferRequestType<typeof client.v2.cv.similar.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cv.similar.videos.$get(args, options))
}

export async function getV2EditorialCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.editorial.categories.$get(undefined, options))
}

export async function getV2EditorialImagesCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.editorial.images.categories.$get(undefined, options))
}

export async function getV2EditorialImagesLicenses(
  args: InferRequestType<typeof client.v2.editorial.images.licenses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.images.licenses.$get(args, options))
}

export async function postV2EditorialImagesLicenses(
  args: InferRequestType<typeof client.v2.editorial.images.licenses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.images.licenses.$post(args, options))
}

export async function getV2EditorialImagesLivefeeds(
  args: InferRequestType<typeof client.v2.editorial.images.livefeeds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.images.livefeeds.$get(args, options))
}

export async function getV2EditorialImagesLivefeedsId(
  args: InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.images.livefeeds[':id'].$get(args, options))
}

export async function getV2EditorialImagesLivefeedsIdItems(
  args: InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.images.livefeeds[':id'].items.$get(args, options))
}

export async function getV2EditorialImagesSearch(
  args: InferRequestType<typeof client.v2.editorial.images.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.images.search.$get(args, options))
}

export async function getV2EditorialImagesUpdated(
  args: InferRequestType<typeof client.v2.editorial.images.updated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.images.updated.$get(args, options))
}

export async function getV2EditorialImagesId(
  args: InferRequestType<(typeof client.v2.editorial.images)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.images[':id'].$get(args, options))
}

export async function postV2EditorialLicenses(
  args: InferRequestType<typeof client.v2.editorial.licenses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.licenses.$post(args, options))
}

export async function getV2EditorialLivefeeds(
  args: InferRequestType<typeof client.v2.editorial.livefeeds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.livefeeds.$get(args, options))
}

export async function getV2EditorialLivefeedsId(
  args: InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.livefeeds[':id'].$get(args, options))
}

export async function getV2EditorialLivefeedsIdItems(
  args: InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.livefeeds[':id'].items.$get(args, options))
}

export async function getV2EditorialSearch(
  args: InferRequestType<typeof client.v2.editorial.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.search.$get(args, options))
}

export async function getV2EditorialUpdated(
  args: InferRequestType<typeof client.v2.editorial.updated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.updated.$get(args, options))
}

export async function getV2EditorialVideosCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.editorial.videos.categories.$get(undefined, options))
}

export async function getV2EditorialVideosLicenses(
  args: InferRequestType<typeof client.v2.editorial.videos.licenses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.videos.licenses.$get(args, options))
}

export async function postV2EditorialVideosLicenses(
  args: InferRequestType<typeof client.v2.editorial.videos.licenses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.videos.licenses.$post(args, options))
}

export async function getV2EditorialVideosSearch(
  args: InferRequestType<typeof client.v2.editorial.videos.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.videos.search.$get(args, options))
}

export async function getV2EditorialVideosId(
  args: InferRequestType<(typeof client.v2.editorial.videos)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial.videos[':id'].$get(args, options))
}

export async function getV2EditorialId(
  args: InferRequestType<(typeof client.v2.editorial)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.editorial[':id'].$get(args, options))
}

export async function getV2Images(
  args: InferRequestType<typeof client.v2.images.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.$get(args, options))
}

export async function postV2Images(
  args: InferRequestType<typeof client.v2.images.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.$post(args, options))
}

export async function getV2ImagesCategories(
  args: InferRequestType<typeof client.v2.images.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.categories.$get(args, options))
}

export async function getV2ImagesCollections(
  args: InferRequestType<typeof client.v2.images.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.collections.$get(args, options))
}

export async function postV2ImagesCollections(
  args: InferRequestType<typeof client.v2.images.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.collections.$post(args, options))
}

export async function getV2ImagesCollectionsFeatured(
  args: InferRequestType<typeof client.v2.images.collections.featured.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.collections.featured.$get(args, options))
}

export async function getV2ImagesCollectionsFeaturedId(
  args: InferRequestType<(typeof client.v2.images.collections.featured)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.collections.featured[':id'].$get(args, options))
}

export async function getV2ImagesCollectionsFeaturedIdItems(
  args: InferRequestType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.collections.featured[':id'].items.$get(args, options))
}

export async function getV2ImagesCollectionsId(
  args: InferRequestType<(typeof client.v2.images.collections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.collections[':id'].$get(args, options))
}

export async function postV2ImagesCollectionsId(
  args: InferRequestType<(typeof client.v2.images.collections)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.collections[':id'].$post(args, options))
}

export async function deleteV2ImagesCollectionsId(
  args: InferRequestType<(typeof client.v2.images.collections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.collections[':id'].$delete(args, options))
}

export async function getV2ImagesCollectionsIdItems(
  args: InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.collections[':id'].items.$get(args, options))
}

export async function postV2ImagesCollectionsIdItems(
  args: InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.collections[':id'].items.$post(args, options))
}

export async function deleteV2ImagesCollectionsIdItems(
  args: InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.collections[':id'].items.$delete(args, options))
}

export async function getV2ImagesLicenses(
  args: InferRequestType<typeof client.v2.images.licenses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.licenses.$get(args, options))
}

export async function postV2ImagesLicenses(
  args: InferRequestType<typeof client.v2.images.licenses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.licenses.$post(args, options))
}

export async function postV2ImagesLicensesIdDownloads(
  args: InferRequestType<(typeof client.v2.images.licenses)[':id']['downloads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.licenses[':id'].downloads.$post(args, options))
}

export async function getV2ImagesRecommendations(
  args: InferRequestType<typeof client.v2.images.recommendations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.recommendations.$get(args, options))
}

export async function getV2ImagesSearch(
  args: InferRequestType<typeof client.v2.images.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.search.$get(args, options))
}

export async function getV2ImagesSearchSuggestions(
  args: InferRequestType<typeof client.v2.images.search.suggestions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.search.suggestions.$get(args, options))
}

export async function postV2ImagesSearchSuggestions(
  args: InferRequestType<typeof client.v2.images.search.suggestions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.search.suggestions.$post(args, options))
}

export async function getV2ImagesUpdated(
  args: InferRequestType<typeof client.v2.images.updated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.updated.$get(args, options))
}

export async function getV2ImagesId(
  args: InferRequestType<(typeof client.v2.images)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images[':id'].$get(args, options))
}

export async function getV2ImagesIdSimilar(
  args: InferRequestType<(typeof client.v2.images)[':id']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images[':id'].similar.$get(args, options))
}

export async function postV2OauthAccessToken(
  args: InferRequestType<typeof client.v2.oauth.access_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.oauth.access_token.$post(args, options))
}

export async function getV2OauthAuthorize(
  args: InferRequestType<typeof client.v2.oauth.authorize.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.oauth.authorize.$get(args, options))
}

export async function getV2Sfx(
  args: InferRequestType<typeof client.v2.sfx.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sfx.$get(args, options))
}

export async function getV2SfxLicenses(
  args: InferRequestType<typeof client.v2.sfx.licenses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sfx.licenses.$get(args, options))
}

export async function postV2SfxLicenses(
  args: InferRequestType<typeof client.v2.sfx.licenses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sfx.licenses.$post(args, options))
}

export async function postV2SfxLicensesIdDownloads(
  args: InferRequestType<(typeof client.v2.sfx.licenses)[':id']['downloads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sfx.licenses[':id'].downloads.$post(args, options))
}

export async function getV2SfxSearch(
  args: InferRequestType<typeof client.v2.sfx.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sfx.search.$get(args, options))
}

export async function getV2SfxId(
  args: InferRequestType<(typeof client.v2.sfx)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sfx[':id'].$get(args, options))
}

export async function getV2Test(
  args: InferRequestType<typeof client.v2.test.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.test.$get(args, options))
}

export async function getV2TestValidate(
  args: InferRequestType<typeof client.v2.test.validate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.test.validate.$get(args, options))
}

export async function getV2User(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.user.$get(undefined, options))
}

export async function getV2UserAccessToken(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.user.access_token.$get(undefined, options))
}

export async function getV2UserSubscriptions(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.user.subscriptions.$get(undefined, options))
}

export async function getV2Videos(
  args: InferRequestType<typeof client.v2.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.$get(args, options))
}

export async function getV2VideosCategories(
  args: InferRequestType<typeof client.v2.videos.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.categories.$get(args, options))
}

export async function getV2VideosCollections(
  args: InferRequestType<typeof client.v2.videos.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.collections.$get(args, options))
}

export async function postV2VideosCollections(
  args: InferRequestType<typeof client.v2.videos.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.collections.$post(args, options))
}

export async function getV2VideosCollectionsFeatured(
  args: InferRequestType<typeof client.v2.videos.collections.featured.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.collections.featured.$get(args, options))
}

export async function getV2VideosCollectionsFeaturedId(
  args: InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.collections.featured[':id'].$get(args, options))
}

export async function getV2VideosCollectionsFeaturedIdItems(
  args: InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.collections.featured[':id'].items.$get(args, options))
}

export async function getV2VideosCollectionsId(
  args: InferRequestType<(typeof client.v2.videos.collections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.collections[':id'].$get(args, options))
}

export async function postV2VideosCollectionsId(
  args: InferRequestType<(typeof client.v2.videos.collections)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.collections[':id'].$post(args, options))
}

export async function deleteV2VideosCollectionsId(
  args: InferRequestType<(typeof client.v2.videos.collections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.collections[':id'].$delete(args, options))
}

export async function getV2VideosCollectionsIdItems(
  args: InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.collections[':id'].items.$get(args, options))
}

export async function postV2VideosCollectionsIdItems(
  args: InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.collections[':id'].items.$post(args, options))
}

export async function deleteV2VideosCollectionsIdItems(
  args: InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.collections[':id'].items.$delete(args, options))
}

export async function getV2VideosLicenses(
  args: InferRequestType<typeof client.v2.videos.licenses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.licenses.$get(args, options))
}

export async function postV2VideosLicenses(
  args: InferRequestType<typeof client.v2.videos.licenses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.licenses.$post(args, options))
}

export async function postV2VideosLicensesIdDownloads(
  args: InferRequestType<(typeof client.v2.videos.licenses)[':id']['downloads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.licenses[':id'].downloads.$post(args, options))
}

export async function getV2VideosSearch(
  args: InferRequestType<typeof client.v2.videos.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.search.$get(args, options))
}

export async function getV2VideosSearchSuggestions(
  args: InferRequestType<typeof client.v2.videos.search.suggestions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.search.suggestions.$get(args, options))
}

export async function getV2VideosUpdated(
  args: InferRequestType<typeof client.v2.videos.updated.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos.updated.$get(args, options))
}

export async function getV2VideosId(
  args: InferRequestType<(typeof client.v2.videos)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos[':id'].$get(args, options))
}

export async function getV2VideosIdSimilar(
  args: InferRequestType<(typeof client.v2.videos)[':id']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.videos[':id'].similar.$get(args, options))
}
