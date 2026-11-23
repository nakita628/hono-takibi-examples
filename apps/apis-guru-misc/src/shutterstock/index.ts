import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2AudioCollectionsIdItemsRoute,
  deleteV2AudioCollectionsIdRoute,
  deleteV2CatalogCollectionsCollectionIdItemsRoute,
  deleteV2CatalogCollectionsCollectionIdRoute,
  deleteV2ImagesCollectionsIdItemsRoute,
  deleteV2ImagesCollectionsIdRoute,
  deleteV2VideosCollectionsIdItemsRoute,
  deleteV2VideosCollectionsIdRoute,
  getV2AiAudioDescriptorsRoute,
  getV2AiAudioInstrumentsRoute,
  getV2AiAudioRendersRoute,
  getV2AudioCollectionsIdItemsRoute,
  getV2AudioCollectionsIdRoute,
  getV2AudioCollectionsRoute,
  getV2AudioGenresRoute,
  getV2AudioIdRoute,
  getV2AudioInstrumentsRoute,
  getV2AudioLicensesRoute,
  getV2AudioMoodsRoute,
  getV2AudioRoute,
  getV2AudioSearchRoute,
  getV2CatalogCollectionsRoute,
  getV2CatalogSearchRoute,
  getV2ContributorsContributorIdCollectionsIdItemsRoute,
  getV2ContributorsContributorIdCollectionsIdRoute,
  getV2ContributorsContributorIdCollectionsRoute,
  getV2ContributorsContributorIdRoute,
  getV2ContributorsRoute,
  getV2CvKeywordsRoute,
  getV2CvSimilarImagesRoute,
  getV2CvSimilarVideosRoute,
  getV2EditorialCategoriesRoute,
  getV2EditorialIdRoute,
  getV2EditorialImagesCategoriesRoute,
  getV2EditorialImagesIdRoute,
  getV2EditorialImagesLicensesRoute,
  getV2EditorialImagesLivefeedsIdItemsRoute,
  getV2EditorialImagesLivefeedsIdRoute,
  getV2EditorialImagesLivefeedsRoute,
  getV2EditorialImagesSearchRoute,
  getV2EditorialImagesUpdatedRoute,
  getV2EditorialLivefeedsIdItemsRoute,
  getV2EditorialLivefeedsIdRoute,
  getV2EditorialLivefeedsRoute,
  getV2EditorialSearchRoute,
  getV2EditorialUpdatedRoute,
  getV2EditorialVideosCategoriesRoute,
  getV2EditorialVideosIdRoute,
  getV2EditorialVideosLicensesRoute,
  getV2EditorialVideosSearchRoute,
  getV2ImagesCategoriesRoute,
  getV2ImagesCollectionsFeaturedIdItemsRoute,
  getV2ImagesCollectionsFeaturedIdRoute,
  getV2ImagesCollectionsFeaturedRoute,
  getV2ImagesCollectionsIdItemsRoute,
  getV2ImagesCollectionsIdRoute,
  getV2ImagesCollectionsRoute,
  getV2ImagesIdRoute,
  getV2ImagesIdSimilarRoute,
  getV2ImagesLicensesRoute,
  getV2ImagesRecommendationsRoute,
  getV2ImagesRoute,
  getV2ImagesSearchRoute,
  getV2ImagesSearchSuggestionsRoute,
  getV2ImagesUpdatedRoute,
  getV2OauthAuthorizeRoute,
  getV2SfxIdRoute,
  getV2SfxLicensesRoute,
  getV2SfxRoute,
  getV2SfxSearchRoute,
  getV2TestRoute,
  getV2TestValidateRoute,
  getV2UserAccessTokenRoute,
  getV2UserRoute,
  getV2UserSubscriptionsRoute,
  getV2VideosCategoriesRoute,
  getV2VideosCollectionsFeaturedIdItemsRoute,
  getV2VideosCollectionsFeaturedIdRoute,
  getV2VideosCollectionsFeaturedRoute,
  getV2VideosCollectionsIdItemsRoute,
  getV2VideosCollectionsIdRoute,
  getV2VideosCollectionsRoute,
  getV2VideosIdRoute,
  getV2VideosIdSimilarRoute,
  getV2VideosLicensesRoute,
  getV2VideosRoute,
  getV2VideosSearchRoute,
  getV2VideosSearchSuggestionsRoute,
  getV2VideosUpdatedRoute,
  patchV2CatalogCollectionsCollectionIdRoute,
  postV2AiAudioRendersRoute,
  postV2AudioCollectionsIdItemsRoute,
  postV2AudioCollectionsIdRoute,
  postV2AudioCollectionsRoute,
  postV2AudioLicensesIdDownloadsRoute,
  postV2AudioLicensesRoute,
  postV2BulkSearchImagesRoute,
  postV2CatalogCollectionsCollectionIdItemsRoute,
  postV2CatalogCollectionsRoute,
  postV2CvImagesRoute,
  postV2EditorialImagesLicensesRoute,
  postV2EditorialLicensesRoute,
  postV2EditorialVideosLicensesRoute,
  postV2ImagesCollectionsIdItemsRoute,
  postV2ImagesCollectionsIdRoute,
  postV2ImagesCollectionsRoute,
  postV2ImagesLicensesIdDownloadsRoute,
  postV2ImagesLicensesRoute,
  postV2ImagesRoute,
  postV2ImagesSearchSuggestionsRoute,
  postV2OauthAccessTokenRoute,
  postV2SfxLicensesIdDownloadsRoute,
  postV2SfxLicensesRoute,
  postV2VideosCollectionsIdItemsRoute,
  postV2VideosCollectionsIdRoute,
  postV2VideosCollectionsRoute,
  postV2VideosLicensesIdDownloadsRoute,
  postV2VideosLicensesRoute,
} from './routes'
import {
  deleteV2AudioCollectionsIdItemsRouteHandler,
  deleteV2AudioCollectionsIdRouteHandler,
  deleteV2CatalogCollectionsCollectionIdItemsRouteHandler,
  deleteV2CatalogCollectionsCollectionIdRouteHandler,
  deleteV2ImagesCollectionsIdItemsRouteHandler,
  deleteV2ImagesCollectionsIdRouteHandler,
  deleteV2VideosCollectionsIdItemsRouteHandler,
  deleteV2VideosCollectionsIdRouteHandler,
  getV2AiAudioDescriptorsRouteHandler,
  getV2AiAudioInstrumentsRouteHandler,
  getV2AiAudioRendersRouteHandler,
  getV2AudioCollectionsIdItemsRouteHandler,
  getV2AudioCollectionsIdRouteHandler,
  getV2AudioCollectionsRouteHandler,
  getV2AudioGenresRouteHandler,
  getV2AudioIdRouteHandler,
  getV2AudioInstrumentsRouteHandler,
  getV2AudioLicensesRouteHandler,
  getV2AudioMoodsRouteHandler,
  getV2AudioRouteHandler,
  getV2AudioSearchRouteHandler,
  getV2CatalogCollectionsRouteHandler,
  getV2CatalogSearchRouteHandler,
  getV2ContributorsContributorIdCollectionsIdItemsRouteHandler,
  getV2ContributorsContributorIdCollectionsIdRouteHandler,
  getV2ContributorsContributorIdCollectionsRouteHandler,
  getV2ContributorsContributorIdRouteHandler,
  getV2ContributorsRouteHandler,
  getV2CvKeywordsRouteHandler,
  getV2CvSimilarImagesRouteHandler,
  getV2CvSimilarVideosRouteHandler,
  getV2EditorialCategoriesRouteHandler,
  getV2EditorialIdRouteHandler,
  getV2EditorialImagesCategoriesRouteHandler,
  getV2EditorialImagesIdRouteHandler,
  getV2EditorialImagesLicensesRouteHandler,
  getV2EditorialImagesLivefeedsIdItemsRouteHandler,
  getV2EditorialImagesLivefeedsIdRouteHandler,
  getV2EditorialImagesLivefeedsRouteHandler,
  getV2EditorialImagesSearchRouteHandler,
  getV2EditorialImagesUpdatedRouteHandler,
  getV2EditorialLivefeedsIdItemsRouteHandler,
  getV2EditorialLivefeedsIdRouteHandler,
  getV2EditorialLivefeedsRouteHandler,
  getV2EditorialSearchRouteHandler,
  getV2EditorialUpdatedRouteHandler,
  getV2EditorialVideosCategoriesRouteHandler,
  getV2EditorialVideosIdRouteHandler,
  getV2EditorialVideosLicensesRouteHandler,
  getV2EditorialVideosSearchRouteHandler,
  getV2ImagesCategoriesRouteHandler,
  getV2ImagesCollectionsFeaturedIdItemsRouteHandler,
  getV2ImagesCollectionsFeaturedIdRouteHandler,
  getV2ImagesCollectionsFeaturedRouteHandler,
  getV2ImagesCollectionsIdItemsRouteHandler,
  getV2ImagesCollectionsIdRouteHandler,
  getV2ImagesCollectionsRouteHandler,
  getV2ImagesIdRouteHandler,
  getV2ImagesIdSimilarRouteHandler,
  getV2ImagesLicensesRouteHandler,
  getV2ImagesRecommendationsRouteHandler,
  getV2ImagesRouteHandler,
  getV2ImagesSearchRouteHandler,
  getV2ImagesSearchSuggestionsRouteHandler,
  getV2ImagesUpdatedRouteHandler,
  getV2OauthAuthorizeRouteHandler,
  getV2SfxIdRouteHandler,
  getV2SfxLicensesRouteHandler,
  getV2SfxRouteHandler,
  getV2SfxSearchRouteHandler,
  getV2TestRouteHandler,
  getV2TestValidateRouteHandler,
  getV2UserAccessTokenRouteHandler,
  getV2UserRouteHandler,
  getV2UserSubscriptionsRouteHandler,
  getV2VideosCategoriesRouteHandler,
  getV2VideosCollectionsFeaturedIdItemsRouteHandler,
  getV2VideosCollectionsFeaturedIdRouteHandler,
  getV2VideosCollectionsFeaturedRouteHandler,
  getV2VideosCollectionsIdItemsRouteHandler,
  getV2VideosCollectionsIdRouteHandler,
  getV2VideosCollectionsRouteHandler,
  getV2VideosIdRouteHandler,
  getV2VideosIdSimilarRouteHandler,
  getV2VideosLicensesRouteHandler,
  getV2VideosRouteHandler,
  getV2VideosSearchRouteHandler,
  getV2VideosSearchSuggestionsRouteHandler,
  getV2VideosUpdatedRouteHandler,
  patchV2CatalogCollectionsCollectionIdRouteHandler,
  postV2AiAudioRendersRouteHandler,
  postV2AudioCollectionsIdItemsRouteHandler,
  postV2AudioCollectionsIdRouteHandler,
  postV2AudioCollectionsRouteHandler,
  postV2AudioLicensesIdDownloadsRouteHandler,
  postV2AudioLicensesRouteHandler,
  postV2BulkSearchImagesRouteHandler,
  postV2CatalogCollectionsCollectionIdItemsRouteHandler,
  postV2CatalogCollectionsRouteHandler,
  postV2CvImagesRouteHandler,
  postV2EditorialImagesLicensesRouteHandler,
  postV2EditorialLicensesRouteHandler,
  postV2EditorialVideosLicensesRouteHandler,
  postV2ImagesCollectionsIdItemsRouteHandler,
  postV2ImagesCollectionsIdRouteHandler,
  postV2ImagesCollectionsRouteHandler,
  postV2ImagesLicensesIdDownloadsRouteHandler,
  postV2ImagesLicensesRouteHandler,
  postV2ImagesRouteHandler,
  postV2ImagesSearchSuggestionsRouteHandler,
  postV2OauthAccessTokenRouteHandler,
  postV2SfxLicensesIdDownloadsRouteHandler,
  postV2SfxLicensesRouteHandler,
  postV2VideosCollectionsIdItemsRouteHandler,
  postV2VideosCollectionsIdRouteHandler,
  postV2VideosCollectionsRouteHandler,
  postV2VideosLicensesIdDownloadsRouteHandler,
  postV2VideosLicensesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV2AiAudioDescriptorsRoute, getV2AiAudioDescriptorsRouteHandler)
  .openapi(getV2AiAudioInstrumentsRoute, getV2AiAudioInstrumentsRouteHandler)
  .openapi(getV2AiAudioRendersRoute, getV2AiAudioRendersRouteHandler)
  .openapi(postV2AiAudioRendersRoute, postV2AiAudioRendersRouteHandler)
  .openapi(getV2AudioRoute, getV2AudioRouteHandler)
  .openapi(getV2AudioCollectionsRoute, getV2AudioCollectionsRouteHandler)
  .openapi(postV2AudioCollectionsRoute, postV2AudioCollectionsRouteHandler)
  .openapi(deleteV2AudioCollectionsIdRoute, deleteV2AudioCollectionsIdRouteHandler)
  .openapi(getV2AudioCollectionsIdRoute, getV2AudioCollectionsIdRouteHandler)
  .openapi(postV2AudioCollectionsIdRoute, postV2AudioCollectionsIdRouteHandler)
  .openapi(deleteV2AudioCollectionsIdItemsRoute, deleteV2AudioCollectionsIdItemsRouteHandler)
  .openapi(getV2AudioCollectionsIdItemsRoute, getV2AudioCollectionsIdItemsRouteHandler)
  .openapi(postV2AudioCollectionsIdItemsRoute, postV2AudioCollectionsIdItemsRouteHandler)
  .openapi(getV2AudioGenresRoute, getV2AudioGenresRouteHandler)
  .openapi(getV2AudioInstrumentsRoute, getV2AudioInstrumentsRouteHandler)
  .openapi(getV2AudioLicensesRoute, getV2AudioLicensesRouteHandler)
  .openapi(postV2AudioLicensesRoute, postV2AudioLicensesRouteHandler)
  .openapi(postV2AudioLicensesIdDownloadsRoute, postV2AudioLicensesIdDownloadsRouteHandler)
  .openapi(getV2AudioMoodsRoute, getV2AudioMoodsRouteHandler)
  .openapi(getV2AudioSearchRoute, getV2AudioSearchRouteHandler)
  .openapi(getV2AudioIdRoute, getV2AudioIdRouteHandler)
  .openapi(postV2BulkSearchImagesRoute, postV2BulkSearchImagesRouteHandler)
  .openapi(getV2CatalogCollectionsRoute, getV2CatalogCollectionsRouteHandler)
  .openapi(postV2CatalogCollectionsRoute, postV2CatalogCollectionsRouteHandler)
  .openapi(
    deleteV2CatalogCollectionsCollectionIdRoute,
    deleteV2CatalogCollectionsCollectionIdRouteHandler,
  )
  .openapi(
    patchV2CatalogCollectionsCollectionIdRoute,
    patchV2CatalogCollectionsCollectionIdRouteHandler,
  )
  .openapi(
    deleteV2CatalogCollectionsCollectionIdItemsRoute,
    deleteV2CatalogCollectionsCollectionIdItemsRouteHandler,
  )
  .openapi(
    postV2CatalogCollectionsCollectionIdItemsRoute,
    postV2CatalogCollectionsCollectionIdItemsRouteHandler,
  )
  .openapi(getV2CatalogSearchRoute, getV2CatalogSearchRouteHandler)
  .openapi(getV2ContributorsRoute, getV2ContributorsRouteHandler)
  .openapi(getV2ContributorsContributorIdRoute, getV2ContributorsContributorIdRouteHandler)
  .openapi(
    getV2ContributorsContributorIdCollectionsRoute,
    getV2ContributorsContributorIdCollectionsRouteHandler,
  )
  .openapi(
    getV2ContributorsContributorIdCollectionsIdRoute,
    getV2ContributorsContributorIdCollectionsIdRouteHandler,
  )
  .openapi(
    getV2ContributorsContributorIdCollectionsIdItemsRoute,
    getV2ContributorsContributorIdCollectionsIdItemsRouteHandler,
  )
  .openapi(postV2CvImagesRoute, postV2CvImagesRouteHandler)
  .openapi(getV2CvKeywordsRoute, getV2CvKeywordsRouteHandler)
  .openapi(getV2CvSimilarImagesRoute, getV2CvSimilarImagesRouteHandler)
  .openapi(getV2CvSimilarVideosRoute, getV2CvSimilarVideosRouteHandler)
  .openapi(getV2EditorialCategoriesRoute, getV2EditorialCategoriesRouteHandler)
  .openapi(getV2EditorialImagesCategoriesRoute, getV2EditorialImagesCategoriesRouteHandler)
  .openapi(getV2EditorialImagesLicensesRoute, getV2EditorialImagesLicensesRouteHandler)
  .openapi(postV2EditorialImagesLicensesRoute, postV2EditorialImagesLicensesRouteHandler)
  .openapi(getV2EditorialImagesLivefeedsRoute, getV2EditorialImagesLivefeedsRouteHandler)
  .openapi(getV2EditorialImagesLivefeedsIdRoute, getV2EditorialImagesLivefeedsIdRouteHandler)
  .openapi(
    getV2EditorialImagesLivefeedsIdItemsRoute,
    getV2EditorialImagesLivefeedsIdItemsRouteHandler,
  )
  .openapi(getV2EditorialImagesSearchRoute, getV2EditorialImagesSearchRouteHandler)
  .openapi(getV2EditorialImagesUpdatedRoute, getV2EditorialImagesUpdatedRouteHandler)
  .openapi(getV2EditorialImagesIdRoute, getV2EditorialImagesIdRouteHandler)
  .openapi(postV2EditorialLicensesRoute, postV2EditorialLicensesRouteHandler)
  .openapi(getV2EditorialLivefeedsRoute, getV2EditorialLivefeedsRouteHandler)
  .openapi(getV2EditorialLivefeedsIdRoute, getV2EditorialLivefeedsIdRouteHandler)
  .openapi(getV2EditorialLivefeedsIdItemsRoute, getV2EditorialLivefeedsIdItemsRouteHandler)
  .openapi(getV2EditorialSearchRoute, getV2EditorialSearchRouteHandler)
  .openapi(getV2EditorialUpdatedRoute, getV2EditorialUpdatedRouteHandler)
  .openapi(getV2EditorialVideosCategoriesRoute, getV2EditorialVideosCategoriesRouteHandler)
  .openapi(getV2EditorialVideosLicensesRoute, getV2EditorialVideosLicensesRouteHandler)
  .openapi(postV2EditorialVideosLicensesRoute, postV2EditorialVideosLicensesRouteHandler)
  .openapi(getV2EditorialVideosSearchRoute, getV2EditorialVideosSearchRouteHandler)
  .openapi(getV2EditorialVideosIdRoute, getV2EditorialVideosIdRouteHandler)
  .openapi(getV2EditorialIdRoute, getV2EditorialIdRouteHandler)
  .openapi(getV2ImagesRoute, getV2ImagesRouteHandler)
  .openapi(postV2ImagesRoute, postV2ImagesRouteHandler)
  .openapi(getV2ImagesCategoriesRoute, getV2ImagesCategoriesRouteHandler)
  .openapi(getV2ImagesCollectionsRoute, getV2ImagesCollectionsRouteHandler)
  .openapi(postV2ImagesCollectionsRoute, postV2ImagesCollectionsRouteHandler)
  .openapi(getV2ImagesCollectionsFeaturedRoute, getV2ImagesCollectionsFeaturedRouteHandler)
  .openapi(getV2ImagesCollectionsFeaturedIdRoute, getV2ImagesCollectionsFeaturedIdRouteHandler)
  .openapi(
    getV2ImagesCollectionsFeaturedIdItemsRoute,
    getV2ImagesCollectionsFeaturedIdItemsRouteHandler,
  )
  .openapi(deleteV2ImagesCollectionsIdRoute, deleteV2ImagesCollectionsIdRouteHandler)
  .openapi(getV2ImagesCollectionsIdRoute, getV2ImagesCollectionsIdRouteHandler)
  .openapi(postV2ImagesCollectionsIdRoute, postV2ImagesCollectionsIdRouteHandler)
  .openapi(deleteV2ImagesCollectionsIdItemsRoute, deleteV2ImagesCollectionsIdItemsRouteHandler)
  .openapi(getV2ImagesCollectionsIdItemsRoute, getV2ImagesCollectionsIdItemsRouteHandler)
  .openapi(postV2ImagesCollectionsIdItemsRoute, postV2ImagesCollectionsIdItemsRouteHandler)
  .openapi(getV2ImagesLicensesRoute, getV2ImagesLicensesRouteHandler)
  .openapi(postV2ImagesLicensesRoute, postV2ImagesLicensesRouteHandler)
  .openapi(postV2ImagesLicensesIdDownloadsRoute, postV2ImagesLicensesIdDownloadsRouteHandler)
  .openapi(getV2ImagesRecommendationsRoute, getV2ImagesRecommendationsRouteHandler)
  .openapi(getV2ImagesSearchRoute, getV2ImagesSearchRouteHandler)
  .openapi(getV2ImagesSearchSuggestionsRoute, getV2ImagesSearchSuggestionsRouteHandler)
  .openapi(postV2ImagesSearchSuggestionsRoute, postV2ImagesSearchSuggestionsRouteHandler)
  .openapi(getV2ImagesUpdatedRoute, getV2ImagesUpdatedRouteHandler)
  .openapi(getV2ImagesIdRoute, getV2ImagesIdRouteHandler)
  .openapi(getV2ImagesIdSimilarRoute, getV2ImagesIdSimilarRouteHandler)
  .openapi(postV2OauthAccessTokenRoute, postV2OauthAccessTokenRouteHandler)
  .openapi(getV2OauthAuthorizeRoute, getV2OauthAuthorizeRouteHandler)
  .openapi(getV2SfxRoute, getV2SfxRouteHandler)
  .openapi(getV2SfxLicensesRoute, getV2SfxLicensesRouteHandler)
  .openapi(postV2SfxLicensesRoute, postV2SfxLicensesRouteHandler)
  .openapi(postV2SfxLicensesIdDownloadsRoute, postV2SfxLicensesIdDownloadsRouteHandler)
  .openapi(getV2SfxSearchRoute, getV2SfxSearchRouteHandler)
  .openapi(getV2SfxIdRoute, getV2SfxIdRouteHandler)
  .openapi(getV2TestRoute, getV2TestRouteHandler)
  .openapi(getV2TestValidateRoute, getV2TestValidateRouteHandler)
  .openapi(getV2UserRoute, getV2UserRouteHandler)
  .openapi(getV2UserAccessTokenRoute, getV2UserAccessTokenRouteHandler)
  .openapi(getV2UserSubscriptionsRoute, getV2UserSubscriptionsRouteHandler)
  .openapi(getV2VideosRoute, getV2VideosRouteHandler)
  .openapi(getV2VideosCategoriesRoute, getV2VideosCategoriesRouteHandler)
  .openapi(getV2VideosCollectionsRoute, getV2VideosCollectionsRouteHandler)
  .openapi(postV2VideosCollectionsRoute, postV2VideosCollectionsRouteHandler)
  .openapi(getV2VideosCollectionsFeaturedRoute, getV2VideosCollectionsFeaturedRouteHandler)
  .openapi(getV2VideosCollectionsFeaturedIdRoute, getV2VideosCollectionsFeaturedIdRouteHandler)
  .openapi(
    getV2VideosCollectionsFeaturedIdItemsRoute,
    getV2VideosCollectionsFeaturedIdItemsRouteHandler,
  )
  .openapi(deleteV2VideosCollectionsIdRoute, deleteV2VideosCollectionsIdRouteHandler)
  .openapi(getV2VideosCollectionsIdRoute, getV2VideosCollectionsIdRouteHandler)
  .openapi(postV2VideosCollectionsIdRoute, postV2VideosCollectionsIdRouteHandler)
  .openapi(deleteV2VideosCollectionsIdItemsRoute, deleteV2VideosCollectionsIdItemsRouteHandler)
  .openapi(getV2VideosCollectionsIdItemsRoute, getV2VideosCollectionsIdItemsRouteHandler)
  .openapi(postV2VideosCollectionsIdItemsRoute, postV2VideosCollectionsIdItemsRouteHandler)
  .openapi(getV2VideosLicensesRoute, getV2VideosLicensesRouteHandler)
  .openapi(postV2VideosLicensesRoute, postV2VideosLicensesRouteHandler)
  .openapi(postV2VideosLicensesIdDownloadsRoute, postV2VideosLicensesIdDownloadsRouteHandler)
  .openapi(getV2VideosSearchRoute, getV2VideosSearchRouteHandler)
  .openapi(getV2VideosSearchSuggestionsRoute, getV2VideosSearchSuggestionsRouteHandler)
  .openapi(getV2VideosUpdatedRoute, getV2VideosUpdatedRouteHandler)
  .openapi(getV2VideosIdRoute, getV2VideosIdRouteHandler)
  .openapi(getV2VideosIdSimilarRoute, getV2VideosIdSimilarRouteHandler)

export default app
