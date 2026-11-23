import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3AssetChangesChangeSetsChangeSetIdRoute,
  deleteV3BoardsBoardIdAssetsAssetIdRoute,
  deleteV3BoardsBoardIdAssetsRoute,
  deleteV3BoardsBoardIdCommentsCommentIdRoute,
  deleteV3BoardsBoardIdRoute,
  getV3AffiliatesSearchImagesRoute,
  getV3AffiliatesSearchVideosRoute,
  getV3ArtistsImagesRoute,
  getV3ArtistsVideosRoute,
  getV3AssetChangesChannelsRoute,
  getV3AssetManagementAssetsSendEventsRoute,
  getV3BoardsBoardIdCommentsRoute,
  getV3BoardsBoardIdRoute,
  getV3BoardsRoute,
  getV3CollectionsRoute,
  getV3CountriesRoute,
  getV3CustomersCurrentRoute,
  getV3DownloadsRoute,
  getV3EventsIdRoute,
  getV3EventsRoute,
  getV3ImagesIdDownloadhistoryRoute,
  getV3ImagesIdRoute,
  getV3ImagesIdSameSeriesRoute,
  getV3ImagesIdSimilarRoute,
  getV3ImagesRoute,
  getV3OrdersIdRoute,
  getV3ProductsRoute,
  getV3PurchasedAssetsRoute,
  getV3SearchEventsRoute,
  getV3SearchImagesCreativeByImageRoute,
  getV3SearchImagesCreativeRoute,
  getV3SearchImagesEditorialRoute,
  getV3SearchImagesRoute,
  getV3SearchVideosCreativeByImageRoute,
  getV3SearchVideosCreativeRoute,
  getV3SearchVideosEditorialRoute,
  getV3VideosIdDownloadhistoryRoute,
  getV3VideosIdRoute,
  getV3VideosIdSameSeriesRoute,
  getV3VideosIdSimilarRoute,
  getV3VideosRoute,
  postV3AssetLicensingAssetIdRoute,
  postV3BoardsBoardIdCommentsRoute,
  postV3BoardsRoute,
  postV3DownloadsImagesIdRoute,
  postV3DownloadsVideosIdRoute,
  putV3AssetChangesChangeSetsRoute,
  putV3BoardsBoardIdAssetsAssetIdRoute,
  putV3BoardsBoardIdAssetsRoute,
  putV3BoardsBoardIdRoute,
  putV3SearchByImageUploadsFileNameRoute,
  putV3UsageBatchesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(getV3AffiliatesSearchImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3AffiliatesSearchVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ArtistsImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ArtistsVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3AssetChangesChangeSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3AssetChangesChangeSetsChangeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3AssetChangesChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3AssetLicensingAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3AssetManagementAssetsSendEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3BoardsBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BoardsBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3BoardsBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3BoardsBoardIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3BoardsBoardIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3BoardsBoardIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3BoardsBoardIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BoardsBoardIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3BoardsBoardIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3BoardsBoardIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3CollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3CountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3CustomersCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3DownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3DownloadsImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3DownloadsVideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3EventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ImagesIdDownloadhistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ImagesIdSameSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ImagesIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3OrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PurchasedAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3SearchByImageUploadsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchImagesCreativeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchImagesCreativeByImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchImagesEditorialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchVideosCreativeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchVideosCreativeByImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchVideosEditorialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3UsageBatchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VideosIdDownloadhistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VideosIdSameSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VideosIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
