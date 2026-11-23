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
} from './routes'
import {
  deleteV3AssetChangesChangeSetsChangeSetIdRouteHandler,
  deleteV3BoardsBoardIdAssetsAssetIdRouteHandler,
  deleteV3BoardsBoardIdAssetsRouteHandler,
  deleteV3BoardsBoardIdCommentsCommentIdRouteHandler,
  deleteV3BoardsBoardIdRouteHandler,
  getV3AffiliatesSearchImagesRouteHandler,
  getV3AffiliatesSearchVideosRouteHandler,
  getV3ArtistsImagesRouteHandler,
  getV3ArtistsVideosRouteHandler,
  getV3AssetChangesChannelsRouteHandler,
  getV3AssetManagementAssetsSendEventsRouteHandler,
  getV3BoardsBoardIdCommentsRouteHandler,
  getV3BoardsBoardIdRouteHandler,
  getV3BoardsRouteHandler,
  getV3CollectionsRouteHandler,
  getV3CountriesRouteHandler,
  getV3CustomersCurrentRouteHandler,
  getV3DownloadsRouteHandler,
  getV3EventsIdRouteHandler,
  getV3EventsRouteHandler,
  getV3ImagesIdDownloadhistoryRouteHandler,
  getV3ImagesIdRouteHandler,
  getV3ImagesIdSameSeriesRouteHandler,
  getV3ImagesIdSimilarRouteHandler,
  getV3ImagesRouteHandler,
  getV3OrdersIdRouteHandler,
  getV3ProductsRouteHandler,
  getV3PurchasedAssetsRouteHandler,
  getV3SearchEventsRouteHandler,
  getV3SearchImagesCreativeByImageRouteHandler,
  getV3SearchImagesCreativeRouteHandler,
  getV3SearchImagesEditorialRouteHandler,
  getV3SearchImagesRouteHandler,
  getV3SearchVideosCreativeByImageRouteHandler,
  getV3SearchVideosCreativeRouteHandler,
  getV3SearchVideosEditorialRouteHandler,
  getV3VideosIdDownloadhistoryRouteHandler,
  getV3VideosIdRouteHandler,
  getV3VideosIdSameSeriesRouteHandler,
  getV3VideosIdSimilarRouteHandler,
  getV3VideosRouteHandler,
  postV3AssetLicensingAssetIdRouteHandler,
  postV3BoardsBoardIdCommentsRouteHandler,
  postV3BoardsRouteHandler,
  postV3DownloadsImagesIdRouteHandler,
  postV3DownloadsVideosIdRouteHandler,
  putV3AssetChangesChangeSetsRouteHandler,
  putV3BoardsBoardIdAssetsAssetIdRouteHandler,
  putV3BoardsBoardIdAssetsRouteHandler,
  putV3BoardsBoardIdRouteHandler,
  putV3SearchByImageUploadsFileNameRouteHandler,
  putV3UsageBatchesIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV3AffiliatesSearchImagesRoute, getV3AffiliatesSearchImagesRouteHandler)
  .openapi(getV3AffiliatesSearchVideosRoute, getV3AffiliatesSearchVideosRouteHandler)
  .openapi(getV3ArtistsImagesRoute, getV3ArtistsImagesRouteHandler)
  .openapi(getV3ArtistsVideosRoute, getV3ArtistsVideosRouteHandler)
  .openapi(putV3AssetChangesChangeSetsRoute, putV3AssetChangesChangeSetsRouteHandler)
  .openapi(
    deleteV3AssetChangesChangeSetsChangeSetIdRoute,
    deleteV3AssetChangesChangeSetsChangeSetIdRouteHandler,
  )
  .openapi(getV3AssetChangesChannelsRoute, getV3AssetChangesChannelsRouteHandler)
  .openapi(postV3AssetLicensingAssetIdRoute, postV3AssetLicensingAssetIdRouteHandler)
  .openapi(
    getV3AssetManagementAssetsSendEventsRoute,
    getV3AssetManagementAssetsSendEventsRouteHandler,
  )
  .openapi(getV3BoardsRoute, getV3BoardsRouteHandler)
  .openapi(postV3BoardsRoute, postV3BoardsRouteHandler)
  .openapi(deleteV3BoardsBoardIdRoute, deleteV3BoardsBoardIdRouteHandler)
  .openapi(getV3BoardsBoardIdRoute, getV3BoardsBoardIdRouteHandler)
  .openapi(putV3BoardsBoardIdRoute, putV3BoardsBoardIdRouteHandler)
  .openapi(deleteV3BoardsBoardIdAssetsRoute, deleteV3BoardsBoardIdAssetsRouteHandler)
  .openapi(putV3BoardsBoardIdAssetsRoute, putV3BoardsBoardIdAssetsRouteHandler)
  .openapi(deleteV3BoardsBoardIdAssetsAssetIdRoute, deleteV3BoardsBoardIdAssetsAssetIdRouteHandler)
  .openapi(putV3BoardsBoardIdAssetsAssetIdRoute, putV3BoardsBoardIdAssetsAssetIdRouteHandler)
  .openapi(getV3BoardsBoardIdCommentsRoute, getV3BoardsBoardIdCommentsRouteHandler)
  .openapi(postV3BoardsBoardIdCommentsRoute, postV3BoardsBoardIdCommentsRouteHandler)
  .openapi(
    deleteV3BoardsBoardIdCommentsCommentIdRoute,
    deleteV3BoardsBoardIdCommentsCommentIdRouteHandler,
  )
  .openapi(getV3CollectionsRoute, getV3CollectionsRouteHandler)
  .openapi(getV3CountriesRoute, getV3CountriesRouteHandler)
  .openapi(getV3CustomersCurrentRoute, getV3CustomersCurrentRouteHandler)
  .openapi(getV3DownloadsRoute, getV3DownloadsRouteHandler)
  .openapi(postV3DownloadsImagesIdRoute, postV3DownloadsImagesIdRouteHandler)
  .openapi(postV3DownloadsVideosIdRoute, postV3DownloadsVideosIdRouteHandler)
  .openapi(getV3EventsRoute, getV3EventsRouteHandler)
  .openapi(getV3EventsIdRoute, getV3EventsIdRouteHandler)
  .openapi(getV3ImagesRoute, getV3ImagesRouteHandler)
  .openapi(getV3ImagesIdRoute, getV3ImagesIdRouteHandler)
  .openapi(getV3ImagesIdDownloadhistoryRoute, getV3ImagesIdDownloadhistoryRouteHandler)
  .openapi(getV3ImagesIdSameSeriesRoute, getV3ImagesIdSameSeriesRouteHandler)
  .openapi(getV3ImagesIdSimilarRoute, getV3ImagesIdSimilarRouteHandler)
  .openapi(getV3OrdersIdRoute, getV3OrdersIdRouteHandler)
  .openapi(getV3ProductsRoute, getV3ProductsRouteHandler)
  .openapi(getV3PurchasedAssetsRoute, getV3PurchasedAssetsRouteHandler)
  .openapi(putV3SearchByImageUploadsFileNameRoute, putV3SearchByImageUploadsFileNameRouteHandler)
  .openapi(getV3SearchEventsRoute, getV3SearchEventsRouteHandler)
  .openapi(getV3SearchImagesRoute, getV3SearchImagesRouteHandler)
  .openapi(getV3SearchImagesCreativeRoute, getV3SearchImagesCreativeRouteHandler)
  .openapi(getV3SearchImagesCreativeByImageRoute, getV3SearchImagesCreativeByImageRouteHandler)
  .openapi(getV3SearchImagesEditorialRoute, getV3SearchImagesEditorialRouteHandler)
  .openapi(getV3SearchVideosCreativeRoute, getV3SearchVideosCreativeRouteHandler)
  .openapi(getV3SearchVideosCreativeByImageRoute, getV3SearchVideosCreativeByImageRouteHandler)
  .openapi(getV3SearchVideosEditorialRoute, getV3SearchVideosEditorialRouteHandler)
  .openapi(putV3UsageBatchesIdRoute, putV3UsageBatchesIdRouteHandler)
  .openapi(getV3VideosRoute, getV3VideosRouteHandler)
  .openapi(getV3VideosIdRoute, getV3VideosIdRouteHandler)
  .openapi(getV3VideosIdDownloadhistoryRoute, getV3VideosIdDownloadhistoryRouteHandler)
  .openapi(getV3VideosIdSameSeriesRoute, getV3VideosIdSameSeriesRouteHandler)
  .openapi(getV3VideosIdSimilarRoute, getV3VideosIdSimilarRouteHandler)

export default app
