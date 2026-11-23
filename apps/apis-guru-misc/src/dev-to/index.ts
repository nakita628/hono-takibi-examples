import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPagesIdRoute,
  getApiArticlesIdRoute,
  getApiArticlesLatestRoute,
  getApiArticlesMeAllRoute,
  getApiArticlesMePublishedRoute,
  getApiArticlesMeRoute,
  getApiArticlesMeUnpublishedRoute,
  getApiArticlesRoute,
  getApiArticlesUsernameSlugRoute,
  getApiCommentsIdRoute,
  getApiCommentsRoute,
  getApiDisplayAdsIdRoute,
  getApiDisplayAdsRoute,
  getApiFollowersUsersRoute,
  getApiFollowsTagsRoute,
  getApiOrganizationsUsernameArticlesRoute,
  getApiOrganizationsUsernameRoute,
  getApiOrganizationsUsernameUsersRoute,
  getApiPagesIdRoute,
  getApiPagesRoute,
  getApiPodcastEpisodesRoute,
  getApiProfileImagesUsernameRoute,
  getApiReadinglistRoute,
  getApiTagsRoute,
  getApiUsersIdRoute,
  getApiUsersMeRoute,
  getApiVideosRoute,
  postApiAdminUsersRoute,
  postApiArticlesRoute,
  postApiDisplayAdsRoute,
  postApiPagesRoute,
  postApiReactionsRoute,
  postApiReactionsToggleRoute,
  putApiArticlesIdRoute,
  putApiArticlesIdUnpublishRoute,
  putApiDisplayAdsIdRoute,
  putApiDisplayAdsIdUnpublishRoute,
  putApiPagesIdRoute,
  putApiUsersIdSuspendRoute,
  putApiUsersIdUnpublishRoute,
} from './routes'
import {
  deleteApiPagesIdRouteHandler,
  getApiArticlesIdRouteHandler,
  getApiArticlesLatestRouteHandler,
  getApiArticlesMeAllRouteHandler,
  getApiArticlesMePublishedRouteHandler,
  getApiArticlesMeRouteHandler,
  getApiArticlesMeUnpublishedRouteHandler,
  getApiArticlesRouteHandler,
  getApiArticlesUsernameSlugRouteHandler,
  getApiCommentsIdRouteHandler,
  getApiCommentsRouteHandler,
  getApiDisplayAdsIdRouteHandler,
  getApiDisplayAdsRouteHandler,
  getApiFollowersUsersRouteHandler,
  getApiFollowsTagsRouteHandler,
  getApiOrganizationsUsernameArticlesRouteHandler,
  getApiOrganizationsUsernameRouteHandler,
  getApiOrganizationsUsernameUsersRouteHandler,
  getApiPagesIdRouteHandler,
  getApiPagesRouteHandler,
  getApiPodcastEpisodesRouteHandler,
  getApiProfileImagesUsernameRouteHandler,
  getApiReadinglistRouteHandler,
  getApiTagsRouteHandler,
  getApiUsersIdRouteHandler,
  getApiUsersMeRouteHandler,
  getApiVideosRouteHandler,
  postApiAdminUsersRouteHandler,
  postApiArticlesRouteHandler,
  postApiDisplayAdsRouteHandler,
  postApiPagesRouteHandler,
  postApiReactionsRouteHandler,
  postApiReactionsToggleRouteHandler,
  putApiArticlesIdRouteHandler,
  putApiArticlesIdUnpublishRouteHandler,
  putApiDisplayAdsIdRouteHandler,
  putApiDisplayAdsIdUnpublishRouteHandler,
  putApiPagesIdRouteHandler,
  putApiUsersIdSuspendRouteHandler,
  putApiUsersIdUnpublishRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiAdminUsersRoute, postApiAdminUsersRouteHandler)
  .openapi(getApiArticlesRoute, getApiArticlesRouteHandler)
  .openapi(postApiArticlesRoute, postApiArticlesRouteHandler)
  .openapi(getApiArticlesLatestRoute, getApiArticlesLatestRouteHandler)
  .openapi(getApiArticlesMeRoute, getApiArticlesMeRouteHandler)
  .openapi(getApiArticlesMeAllRoute, getApiArticlesMeAllRouteHandler)
  .openapi(getApiArticlesMePublishedRoute, getApiArticlesMePublishedRouteHandler)
  .openapi(getApiArticlesMeUnpublishedRoute, getApiArticlesMeUnpublishedRouteHandler)
  .openapi(getApiArticlesIdRoute, getApiArticlesIdRouteHandler)
  .openapi(putApiArticlesIdRoute, putApiArticlesIdRouteHandler)
  .openapi(putApiArticlesIdUnpublishRoute, putApiArticlesIdUnpublishRouteHandler)
  .openapi(getApiArticlesUsernameSlugRoute, getApiArticlesUsernameSlugRouteHandler)
  .openapi(getApiCommentsRoute, getApiCommentsRouteHandler)
  .openapi(getApiCommentsIdRoute, getApiCommentsIdRouteHandler)
  .openapi(getApiDisplayAdsRoute, getApiDisplayAdsRouteHandler)
  .openapi(postApiDisplayAdsRoute, postApiDisplayAdsRouteHandler)
  .openapi(getApiDisplayAdsIdRoute, getApiDisplayAdsIdRouteHandler)
  .openapi(putApiDisplayAdsIdRoute, putApiDisplayAdsIdRouteHandler)
  .openapi(putApiDisplayAdsIdUnpublishRoute, putApiDisplayAdsIdUnpublishRouteHandler)
  .openapi(getApiFollowersUsersRoute, getApiFollowersUsersRouteHandler)
  .openapi(getApiFollowsTagsRoute, getApiFollowsTagsRouteHandler)
  .openapi(getApiOrganizationsUsernameRoute, getApiOrganizationsUsernameRouteHandler)
  .openapi(
    getApiOrganizationsUsernameArticlesRoute,
    getApiOrganizationsUsernameArticlesRouteHandler,
  )
  .openapi(getApiOrganizationsUsernameUsersRoute, getApiOrganizationsUsernameUsersRouteHandler)
  .openapi(getApiPagesRoute, getApiPagesRouteHandler)
  .openapi(postApiPagesRoute, postApiPagesRouteHandler)
  .openapi(deleteApiPagesIdRoute, deleteApiPagesIdRouteHandler)
  .openapi(getApiPagesIdRoute, getApiPagesIdRouteHandler)
  .openapi(putApiPagesIdRoute, putApiPagesIdRouteHandler)
  .openapi(getApiPodcastEpisodesRoute, getApiPodcastEpisodesRouteHandler)
  .openapi(getApiProfileImagesUsernameRoute, getApiProfileImagesUsernameRouteHandler)
  .openapi(postApiReactionsRoute, postApiReactionsRouteHandler)
  .openapi(postApiReactionsToggleRoute, postApiReactionsToggleRouteHandler)
  .openapi(getApiReadinglistRoute, getApiReadinglistRouteHandler)
  .openapi(getApiTagsRoute, getApiTagsRouteHandler)
  .openapi(getApiUsersMeRoute, getApiUsersMeRouteHandler)
  .openapi(getApiUsersIdRoute, getApiUsersIdRouteHandler)
  .openapi(putApiUsersIdSuspendRoute, putApiUsersIdSuspendRouteHandler)
  .openapi(putApiUsersIdUnpublishRoute, putApiUsersIdUnpublishRouteHandler)
  .openapi(getApiVideosRoute, getApiVideosRouteHandler)

export default app
