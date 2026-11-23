import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLiveStreamsLiveStreamIdRoute,
  deleteLiveStreamsLiveStreamIdThumbnailRoute,
  deletePlayersPlayerIdLogoRoute,
  deletePlayersPlayerIdRoute,
  deleteUploadTokensUploadTokenRoute,
  deleteVideosVideoIdCaptionsLanguageRoute,
  deleteVideosVideoIdChaptersLanguageRoute,
  deleteVideosVideoIdRoute,
  deleteWebhooksWebhookIdRoute,
  getAccountRoute,
  getAnalyticsLiveStreamsLiveStreamIdRoute,
  getAnalyticsSessionsSessionIdEventsRoute,
  getAnalyticsVideosVideoIdRoute,
  getLiveStreamsLiveStreamIdRoute,
  getLiveStreamsRoute,
  getPlayersPlayerIdRoute,
  getPlayersRoute,
  getUploadTokensRoute,
  getUploadTokensUploadTokenRoute,
  getVideosRoute,
  getVideosVideoIdCaptionsLanguageRoute,
  getVideosVideoIdCaptionsRoute,
  getVideosVideoIdChaptersLanguageRoute,
  getVideosVideoIdChaptersRoute,
  getVideosVideoIdRoute,
  getVideosVideoIdStatusRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdRoute,
  patchLiveStreamsLiveStreamIdRoute,
  patchPlayersPlayerIdRoute,
  patchVideosVideoIdCaptionsLanguageRoute,
  patchVideosVideoIdRoute,
  patchVideosVideoIdThumbnailRoute,
  postAuthApiKeyRoute,
  postAuthRefreshRoute,
  postLiveStreamsLiveStreamIdThumbnailRoute,
  postLiveStreamsRoute,
  postPlayersPlayerIdLogoRoute,
  postPlayersRoute,
  postUploadRoute,
  postUploadTokensRoute,
  postVideosRoute,
  postVideosVideoIdCaptionsLanguageRoute,
  postVideosVideoIdChaptersLanguageRoute,
  postVideosVideoIdSourceRoute,
  postVideosVideoIdThumbnailRoute,
  postWebhooksRoute,
} from './routes'
import {
  deleteLiveStreamsLiveStreamIdRouteHandler,
  deleteLiveStreamsLiveStreamIdThumbnailRouteHandler,
  deletePlayersPlayerIdLogoRouteHandler,
  deletePlayersPlayerIdRouteHandler,
  deleteUploadTokensUploadTokenRouteHandler,
  deleteVideosVideoIdCaptionsLanguageRouteHandler,
  deleteVideosVideoIdChaptersLanguageRouteHandler,
  deleteVideosVideoIdRouteHandler,
  deleteWebhooksWebhookIdRouteHandler,
  getAccountRouteHandler,
  getAnalyticsLiveStreamsLiveStreamIdRouteHandler,
  getAnalyticsSessionsSessionIdEventsRouteHandler,
  getAnalyticsVideosVideoIdRouteHandler,
  getLiveStreamsLiveStreamIdRouteHandler,
  getLiveStreamsRouteHandler,
  getPlayersPlayerIdRouteHandler,
  getPlayersRouteHandler,
  getUploadTokensRouteHandler,
  getUploadTokensUploadTokenRouteHandler,
  getVideosRouteHandler,
  getVideosVideoIdCaptionsLanguageRouteHandler,
  getVideosVideoIdCaptionsRouteHandler,
  getVideosVideoIdChaptersLanguageRouteHandler,
  getVideosVideoIdChaptersRouteHandler,
  getVideosVideoIdRouteHandler,
  getVideosVideoIdStatusRouteHandler,
  getWebhooksRouteHandler,
  getWebhooksWebhookIdRouteHandler,
  patchLiveStreamsLiveStreamIdRouteHandler,
  patchPlayersPlayerIdRouteHandler,
  patchVideosVideoIdCaptionsLanguageRouteHandler,
  patchVideosVideoIdRouteHandler,
  patchVideosVideoIdThumbnailRouteHandler,
  postAuthApiKeyRouteHandler,
  postAuthRefreshRouteHandler,
  postLiveStreamsLiveStreamIdThumbnailRouteHandler,
  postLiveStreamsRouteHandler,
  postPlayersPlayerIdLogoRouteHandler,
  postPlayersRouteHandler,
  postUploadRouteHandler,
  postUploadTokensRouteHandler,
  postVideosRouteHandler,
  postVideosVideoIdCaptionsLanguageRouteHandler,
  postVideosVideoIdChaptersLanguageRouteHandler,
  postVideosVideoIdSourceRouteHandler,
  postVideosVideoIdThumbnailRouteHandler,
  postWebhooksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(
    getAnalyticsLiveStreamsLiveStreamIdRoute,
    getAnalyticsLiveStreamsLiveStreamIdRouteHandler,
  )
  .openapi(
    getAnalyticsSessionsSessionIdEventsRoute,
    getAnalyticsSessionsSessionIdEventsRouteHandler,
  )
  .openapi(getAnalyticsVideosVideoIdRoute, getAnalyticsVideosVideoIdRouteHandler)
  .openapi(postAuthApiKeyRoute, postAuthApiKeyRouteHandler)
  .openapi(postAuthRefreshRoute, postAuthRefreshRouteHandler)
  .openapi(getLiveStreamsRoute, getLiveStreamsRouteHandler)
  .openapi(postLiveStreamsRoute, postLiveStreamsRouteHandler)
  .openapi(deleteLiveStreamsLiveStreamIdRoute, deleteLiveStreamsLiveStreamIdRouteHandler)
  .openapi(getLiveStreamsLiveStreamIdRoute, getLiveStreamsLiveStreamIdRouteHandler)
  .openapi(patchLiveStreamsLiveStreamIdRoute, patchLiveStreamsLiveStreamIdRouteHandler)
  .openapi(
    deleteLiveStreamsLiveStreamIdThumbnailRoute,
    deleteLiveStreamsLiveStreamIdThumbnailRouteHandler,
  )
  .openapi(
    postLiveStreamsLiveStreamIdThumbnailRoute,
    postLiveStreamsLiveStreamIdThumbnailRouteHandler,
  )
  .openapi(getPlayersRoute, getPlayersRouteHandler)
  .openapi(postPlayersRoute, postPlayersRouteHandler)
  .openapi(deletePlayersPlayerIdRoute, deletePlayersPlayerIdRouteHandler)
  .openapi(getPlayersPlayerIdRoute, getPlayersPlayerIdRouteHandler)
  .openapi(patchPlayersPlayerIdRoute, patchPlayersPlayerIdRouteHandler)
  .openapi(deletePlayersPlayerIdLogoRoute, deletePlayersPlayerIdLogoRouteHandler)
  .openapi(postPlayersPlayerIdLogoRoute, postPlayersPlayerIdLogoRouteHandler)
  .openapi(postUploadRoute, postUploadRouteHandler)
  .openapi(getUploadTokensRoute, getUploadTokensRouteHandler)
  .openapi(postUploadTokensRoute, postUploadTokensRouteHandler)
  .openapi(deleteUploadTokensUploadTokenRoute, deleteUploadTokensUploadTokenRouteHandler)
  .openapi(getUploadTokensUploadTokenRoute, getUploadTokensUploadTokenRouteHandler)
  .openapi(getVideosRoute, getVideosRouteHandler)
  .openapi(postVideosRoute, postVideosRouteHandler)
  .openapi(deleteVideosVideoIdRoute, deleteVideosVideoIdRouteHandler)
  .openapi(getVideosVideoIdRoute, getVideosVideoIdRouteHandler)
  .openapi(patchVideosVideoIdRoute, patchVideosVideoIdRouteHandler)
  .openapi(getVideosVideoIdCaptionsRoute, getVideosVideoIdCaptionsRouteHandler)
  .openapi(
    deleteVideosVideoIdCaptionsLanguageRoute,
    deleteVideosVideoIdCaptionsLanguageRouteHandler,
  )
  .openapi(getVideosVideoIdCaptionsLanguageRoute, getVideosVideoIdCaptionsLanguageRouteHandler)
  .openapi(patchVideosVideoIdCaptionsLanguageRoute, patchVideosVideoIdCaptionsLanguageRouteHandler)
  .openapi(postVideosVideoIdCaptionsLanguageRoute, postVideosVideoIdCaptionsLanguageRouteHandler)
  .openapi(getVideosVideoIdChaptersRoute, getVideosVideoIdChaptersRouteHandler)
  .openapi(
    deleteVideosVideoIdChaptersLanguageRoute,
    deleteVideosVideoIdChaptersLanguageRouteHandler,
  )
  .openapi(getVideosVideoIdChaptersLanguageRoute, getVideosVideoIdChaptersLanguageRouteHandler)
  .openapi(postVideosVideoIdChaptersLanguageRoute, postVideosVideoIdChaptersLanguageRouteHandler)
  .openapi(postVideosVideoIdSourceRoute, postVideosVideoIdSourceRouteHandler)
  .openapi(getVideosVideoIdStatusRoute, getVideosVideoIdStatusRouteHandler)
  .openapi(patchVideosVideoIdThumbnailRoute, patchVideosVideoIdThumbnailRouteHandler)
  .openapi(postVideosVideoIdThumbnailRoute, postVideosVideoIdThumbnailRouteHandler)
  .openapi(getWebhooksRoute, getWebhooksRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(deleteWebhooksWebhookIdRoute, deleteWebhooksWebhookIdRouteHandler)
  .openapi(getWebhooksWebhookIdRoute, getWebhooksWebhookIdRouteHandler)

export default app
