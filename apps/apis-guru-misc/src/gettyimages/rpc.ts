import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV3AffiliatesSearchImages(
  args: InferRequestType<typeof client.v3.affiliates.search.images.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.affiliates.search.images.$get(args, options))
}

export async function getV3AffiliatesSearchVideos(
  args: InferRequestType<typeof client.v3.affiliates.search.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.affiliates.search.videos.$get(args, options))
}

export async function getV3ArtistsImages(
  args: InferRequestType<typeof client.v3.artists.images.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.artists.images.$get(args, options))
}

export async function getV3ArtistsVideos(
  args: InferRequestType<typeof client.v3.artists.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.artists.videos.$get(args, options))
}

export async function putV3AssetChangesChangeSets(
  args: InferRequestType<(typeof client.v3)['asset-changes']['change-sets']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3['asset-changes']['change-sets'].$put(args, options))
}

export async function deleteV3AssetChangesChangeSetsChangeSetId(
  args: InferRequestType<
    (typeof client.v3)['asset-changes']['change-sets'][':change-set-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3['asset-changes']['change-sets'][':change-set-id'].$delete(args, options),
  )
}

export async function getV3AssetChangesChannels(options?: ClientRequestOptions) {
  return await parseResponse(client.v3['asset-changes'].channels.$get(undefined, options))
}

export async function postV3AssetLicensingAssetId(
  args: InferRequestType<(typeof client.v3)['asset-licensing'][':assetId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3['asset-licensing'][':assetId'].$post(args, options))
}

export async function getV3AssetManagementAssetsSendEvents(
  args: InferRequestType<(typeof client.v3)['asset-management']['assets']['send-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3['asset-management'].assets['send-events'].$get(args, options),
  )
}

export async function getV3Boards(
  args: InferRequestType<typeof client.v3.boards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.boards.$get(args, options))
}

export async function postV3Boards(
  args: InferRequestType<typeof client.v3.boards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.boards.$post(args, options))
}

export async function getV3BoardsBoardId(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.boards[':board_id'].$get(args, options))
}

export async function putV3BoardsBoardId(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.boards[':board_id'].$put(args, options))
}

export async function deleteV3BoardsBoardId(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.boards[':board_id'].$delete(args, options))
}

export async function putV3BoardsBoardIdAssets(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['assets']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.boards[':board_id'].assets.$put(args, options))
}

export async function deleteV3BoardsBoardIdAssets(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['assets']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.boards[':board_id'].assets.$delete(args, options))
}

export async function putV3BoardsBoardIdAssetsAssetId(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.boards[':board_id'].assets[':asset_id'].$put(args, options))
}

export async function deleteV3BoardsBoardIdAssetsAssetId(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['assets'][':asset_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.boards[':board_id'].assets[':asset_id'].$delete(args, options),
  )
}

export async function getV3BoardsBoardIdComments(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.boards[':board_id'].comments.$get(args, options))
}

export async function postV3BoardsBoardIdComments(
  args: InferRequestType<(typeof client.v3.boards)[':board_id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.boards[':board_id'].comments.$post(args, options))
}

export async function deleteV3BoardsBoardIdCommentsCommentId(
  args: InferRequestType<
    (typeof client.v3.boards)[':board_id']['comments'][':comment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3.boards[':board_id'].comments[':comment_id'].$delete(args, options),
  )
}

export async function getV3Collections(
  args: InferRequestType<typeof client.v3.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.collections.$get(args, options))
}

export async function getV3Countries(
  args: InferRequestType<typeof client.v3.countries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.countries.$get(args, options))
}

export async function getV3CustomersCurrent(
  args: InferRequestType<typeof client.v3.customers.current.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.customers.current.$get(args, options))
}

export async function getV3Downloads(
  args: InferRequestType<typeof client.v3.downloads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.downloads.$get(args, options))
}

export async function postV3DownloadsImagesId(
  args: InferRequestType<(typeof client.v3.downloads.images)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.downloads.images[':id'].$post(args, options))
}

export async function postV3DownloadsVideosId(
  args: InferRequestType<(typeof client.v3.downloads.videos)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.downloads.videos[':id'].$post(args, options))
}

export async function getV3Events(
  args: InferRequestType<typeof client.v3.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.events.$get(args, options))
}

export async function getV3EventsId(
  args: InferRequestType<(typeof client.v3.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.events[':id'].$get(args, options))
}

export async function getV3Images(
  args: InferRequestType<typeof client.v3.images.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.images.$get(args, options))
}

export async function getV3ImagesId(
  args: InferRequestType<(typeof client.v3.images)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.images[':id'].$get(args, options))
}

export async function getV3ImagesIdDownloadhistory(
  args: InferRequestType<(typeof client.v3.images)[':id']['downloadhistory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.images[':id'].downloadhistory.$get(args, options))
}

export async function getV3ImagesIdSameSeries(
  args: InferRequestType<(typeof client.v3.images)[':id']['same-series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.images[':id']['same-series'].$get(args, options))
}

export async function getV3ImagesIdSimilar(
  args: InferRequestType<(typeof client.v3.images)[':id']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.images[':id'].similar.$get(args, options))
}

export async function getV3OrdersId(
  args: InferRequestType<(typeof client.v3.orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.orders[':id'].$get(args, options))
}

export async function getV3Products(
  args: InferRequestType<typeof client.v3.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.products.$get(args, options))
}

export async function getV3PurchasedAssets(
  args: InferRequestType<(typeof client.v3)['purchased-assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3['purchased-assets'].$get(args, options))
}

export async function putV3SearchByImageUploadsFileName(
  args: InferRequestType<(typeof client.v3.search)['by-image']['uploads'][':file-name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.search['by-image'].uploads[':file-name'].$put(args, options))
}

export async function getV3SearchEvents(
  args: InferRequestType<typeof client.v3.search.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.search.events.$get(args, options))
}

export async function getV3SearchImages(
  args: InferRequestType<typeof client.v3.search.images.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.search.images.$get(args, options))
}

export async function getV3SearchImagesCreative(
  args: InferRequestType<typeof client.v3.search.images.creative.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.search.images.creative.$get(args, options))
}

export async function getV3SearchImagesCreativeByImage(
  args: InferRequestType<(typeof client.v3.search.images.creative)['by-image']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.search.images.creative['by-image'].$get(args, options))
}

export async function getV3SearchImagesEditorial(
  args: InferRequestType<typeof client.v3.search.images.editorial.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.search.images.editorial.$get(args, options))
}

export async function getV3SearchVideosCreative(
  args: InferRequestType<typeof client.v3.search.videos.creative.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.search.videos.creative.$get(args, options))
}

export async function getV3SearchVideosCreativeByImage(
  args: InferRequestType<(typeof client.v3.search.videos.creative)['by-image']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.search.videos.creative['by-image'].$get(args, options))
}

export async function getV3SearchVideosEditorial(
  args: InferRequestType<typeof client.v3.search.videos.editorial.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.search.videos.editorial.$get(args, options))
}

export async function putV3UsageBatchesId(
  args: InferRequestType<(typeof client.v3)['usage-batches'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3['usage-batches'][':id'].$put(args, options))
}

export async function getV3Videos(
  args: InferRequestType<typeof client.v3.videos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.videos.$get(args, options))
}

export async function getV3VideosId(
  args: InferRequestType<(typeof client.v3.videos)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.videos[':id'].$get(args, options))
}

export async function getV3VideosIdDownloadhistory(
  args: InferRequestType<(typeof client.v3.videos)[':id']['downloadhistory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.videos[':id'].downloadhistory.$get(args, options))
}

export async function getV3VideosIdSameSeries(
  args: InferRequestType<(typeof client.v3.videos)[':id']['same-series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.videos[':id']['same-series'].$get(args, options))
}

export async function getV3VideosIdSimilar(
  args: InferRequestType<(typeof client.v3.videos)[':id']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3.videos[':id'].similar.$get(args, options))
}
