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
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2AiAudioDescriptorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AiAudioInstrumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AiAudioRendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AiAudioRendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AudioCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2AudioCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AudioCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2AudioCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AudioCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioGenresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioInstrumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AudioLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AudioLicensesIdDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioMoodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AudioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BulkSearchImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CatalogCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CatalogCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CatalogCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CatalogCollectionsCollectionIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CatalogCollectionsCollectionIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CatalogSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ContributorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ContributorsContributorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ContributorsContributorIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ContributorsContributorIdCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ContributorsContributorIdCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CvImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CvKeywordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CvSimilarImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CvSimilarVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialImagesCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialImagesLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EditorialImagesLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialImagesLivefeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialImagesLivefeedsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialImagesLivefeedsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialImagesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialImagesUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EditorialLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialLivefeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialLivefeedsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialLivefeedsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialVideosCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialVideosLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EditorialVideosLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialVideosSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialVideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ImagesCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesCollectionsFeaturedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesCollectionsFeaturedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesCollectionsFeaturedIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ImagesCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ImagesCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ImagesCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ImagesCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ImagesLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ImagesLicensesIdDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesSearchSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ImagesSearchSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ImagesIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OauthAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SfxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SfxLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SfxLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SfxLicensesIdDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SfxSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SfxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TestValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VideosCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosCollectionsFeaturedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosCollectionsFeaturedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosCollectionsFeaturedIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2VideosCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VideosCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2VideosCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VideosCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VideosLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VideosLicensesIdDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosSearchSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VideosIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
