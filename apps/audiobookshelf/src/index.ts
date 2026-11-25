import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAuthorsIdRoute,
  patchApiAuthorsIdRoute,
  deleteApiAuthorsIdRoute,
  getApiAuthorsIdImageRoute,
  postApiAuthorsIdImageRoute,
  patchApiAuthorsIdImageRoute,
  deleteApiAuthorsIdImageRoute,
  postApiAuthorsIdMatchRoute,
  getApiEmailsSettingsRoute,
  patchApiEmailsSettingsRoute,
  postApiEmailsTestRoute,
  postApiEmailsEreaderDevicesRoute,
  postApiEmailsSendEbookToDeviceRoute,
  getApiLibrariesRoute,
  postApiLibrariesRoute,
  getApiLibrariesIdRoute,
  patchApiLibrariesIdRoute,
  deleteApiLibrariesIdRoute,
  getApiLibrariesIdAuthorsRoute,
  getApiLibrariesIdItemsRoute,
  deleteApiLibrariesIdIssuesRoute,
  getApiLibrariesIdSeriesRoute,
  getApiLibrariesIdSeriesSeriesIdRoute,
  getApiNotificationsRoute,
  patchApiNotificationsRoute,
  postApiNotificationsRoute,
  getApiNotificationdataRoute,
  getApiNotificationsTestRoute,
  deleteApiNotificationsIdRoute,
  patchApiNotificationsIdRoute,
  getApiNotificationsIdTestRoute,
  postApiPodcastsRoute,
  postApiPodcastsFeedRoute,
  postApiPodcastsOpmlParseRoute,
  postApiPodcastsOpmlCreateRoute,
  getApiPodcastsIdChecknewRoute,
  getApiPodcastsIdClearQueueRoute,
  getApiPodcastsIdDownloadsRoute,
  getApiPodcastsIdSearchEpisodeRoute,
  postApiPodcastsIdDownloadEpisodesRoute,
  postApiPodcastsIdMatchEpisodesRoute,
  patchApiPodcastsIdEpisodeEpisodeIdRoute,
  getApiPodcastsIdEpisodeEpisodeIdRoute,
  deleteApiPodcastsIdEpisodeEpisodeIdRoute,
  getApiSeriesIdRoute,
  patchApiSeriesIdRoute,
} from './routes'
import {
  getApiAuthorsIdRouteHandler,
  patchApiAuthorsIdRouteHandler,
  deleteApiAuthorsIdRouteHandler,
  getApiAuthorsIdImageRouteHandler,
  postApiAuthorsIdImageRouteHandler,
  patchApiAuthorsIdImageRouteHandler,
  deleteApiAuthorsIdImageRouteHandler,
  postApiAuthorsIdMatchRouteHandler,
  getApiEmailsSettingsRouteHandler,
  patchApiEmailsSettingsRouteHandler,
  postApiEmailsTestRouteHandler,
  postApiEmailsEreaderDevicesRouteHandler,
  postApiEmailsSendEbookToDeviceRouteHandler,
  getApiLibrariesRouteHandler,
  postApiLibrariesRouteHandler,
  getApiLibrariesIdRouteHandler,
  patchApiLibrariesIdRouteHandler,
  deleteApiLibrariesIdRouteHandler,
  getApiLibrariesIdAuthorsRouteHandler,
  getApiLibrariesIdItemsRouteHandler,
  deleteApiLibrariesIdIssuesRouteHandler,
  getApiLibrariesIdSeriesRouteHandler,
  getApiLibrariesIdSeriesSeriesIdRouteHandler,
  getApiNotificationsRouteHandler,
  patchApiNotificationsRouteHandler,
  postApiNotificationsRouteHandler,
  getApiNotificationdataRouteHandler,
  getApiNotificationsTestRouteHandler,
  deleteApiNotificationsIdRouteHandler,
  patchApiNotificationsIdRouteHandler,
  getApiNotificationsIdTestRouteHandler,
  postApiPodcastsRouteHandler,
  postApiPodcastsFeedRouteHandler,
  postApiPodcastsOpmlParseRouteHandler,
  postApiPodcastsOpmlCreateRouteHandler,
  getApiPodcastsIdChecknewRouteHandler,
  getApiPodcastsIdClearQueueRouteHandler,
  getApiPodcastsIdDownloadsRouteHandler,
  getApiPodcastsIdSearchEpisodeRouteHandler,
  postApiPodcastsIdDownloadEpisodesRouteHandler,
  postApiPodcastsIdMatchEpisodesRouteHandler,
  patchApiPodcastsIdEpisodeEpisodeIdRouteHandler,
  getApiPodcastsIdEpisodeEpisodeIdRouteHandler,
  deleteApiPodcastsIdEpisodeEpisodeIdRouteHandler,
  getApiSeriesIdRouteHandler,
  patchApiSeriesIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiAuthorsIdRoute, getApiAuthorsIdRouteHandler)
  .openapi(patchApiAuthorsIdRoute, patchApiAuthorsIdRouteHandler)
  .openapi(deleteApiAuthorsIdRoute, deleteApiAuthorsIdRouteHandler)
  .openapi(getApiAuthorsIdImageRoute, getApiAuthorsIdImageRouteHandler)
  .openapi(postApiAuthorsIdImageRoute, postApiAuthorsIdImageRouteHandler)
  .openapi(patchApiAuthorsIdImageRoute, patchApiAuthorsIdImageRouteHandler)
  .openapi(deleteApiAuthorsIdImageRoute, deleteApiAuthorsIdImageRouteHandler)
  .openapi(postApiAuthorsIdMatchRoute, postApiAuthorsIdMatchRouteHandler)
  .openapi(getApiEmailsSettingsRoute, getApiEmailsSettingsRouteHandler)
  .openapi(patchApiEmailsSettingsRoute, patchApiEmailsSettingsRouteHandler)
  .openapi(postApiEmailsTestRoute, postApiEmailsTestRouteHandler)
  .openapi(postApiEmailsEreaderDevicesRoute, postApiEmailsEreaderDevicesRouteHandler)
  .openapi(postApiEmailsSendEbookToDeviceRoute, postApiEmailsSendEbookToDeviceRouteHandler)
  .openapi(getApiLibrariesRoute, getApiLibrariesRouteHandler)
  .openapi(postApiLibrariesRoute, postApiLibrariesRouteHandler)
  .openapi(getApiLibrariesIdRoute, getApiLibrariesIdRouteHandler)
  .openapi(patchApiLibrariesIdRoute, patchApiLibrariesIdRouteHandler)
  .openapi(deleteApiLibrariesIdRoute, deleteApiLibrariesIdRouteHandler)
  .openapi(getApiLibrariesIdAuthorsRoute, getApiLibrariesIdAuthorsRouteHandler)
  .openapi(getApiLibrariesIdItemsRoute, getApiLibrariesIdItemsRouteHandler)
  .openapi(deleteApiLibrariesIdIssuesRoute, deleteApiLibrariesIdIssuesRouteHandler)
  .openapi(getApiLibrariesIdSeriesRoute, getApiLibrariesIdSeriesRouteHandler)
  .openapi(getApiLibrariesIdSeriesSeriesIdRoute, getApiLibrariesIdSeriesSeriesIdRouteHandler)
  .openapi(getApiNotificationsRoute, getApiNotificationsRouteHandler)
  .openapi(patchApiNotificationsRoute, patchApiNotificationsRouteHandler)
  .openapi(postApiNotificationsRoute, postApiNotificationsRouteHandler)
  .openapi(getApiNotificationdataRoute, getApiNotificationdataRouteHandler)
  .openapi(getApiNotificationsTestRoute, getApiNotificationsTestRouteHandler)
  .openapi(deleteApiNotificationsIdRoute, deleteApiNotificationsIdRouteHandler)
  .openapi(patchApiNotificationsIdRoute, patchApiNotificationsIdRouteHandler)
  .openapi(getApiNotificationsIdTestRoute, getApiNotificationsIdTestRouteHandler)
  .openapi(postApiPodcastsRoute, postApiPodcastsRouteHandler)
  .openapi(postApiPodcastsFeedRoute, postApiPodcastsFeedRouteHandler)
  .openapi(postApiPodcastsOpmlParseRoute, postApiPodcastsOpmlParseRouteHandler)
  .openapi(postApiPodcastsOpmlCreateRoute, postApiPodcastsOpmlCreateRouteHandler)
  .openapi(getApiPodcastsIdChecknewRoute, getApiPodcastsIdChecknewRouteHandler)
  .openapi(getApiPodcastsIdClearQueueRoute, getApiPodcastsIdClearQueueRouteHandler)
  .openapi(getApiPodcastsIdDownloadsRoute, getApiPodcastsIdDownloadsRouteHandler)
  .openapi(getApiPodcastsIdSearchEpisodeRoute, getApiPodcastsIdSearchEpisodeRouteHandler)
  .openapi(postApiPodcastsIdDownloadEpisodesRoute, postApiPodcastsIdDownloadEpisodesRouteHandler)
  .openapi(postApiPodcastsIdMatchEpisodesRoute, postApiPodcastsIdMatchEpisodesRouteHandler)
  .openapi(patchApiPodcastsIdEpisodeEpisodeIdRoute, patchApiPodcastsIdEpisodeEpisodeIdRouteHandler)
  .openapi(getApiPodcastsIdEpisodeEpisodeIdRoute, getApiPodcastsIdEpisodeEpisodeIdRouteHandler)
  .openapi(
    deleteApiPodcastsIdEpisodeEpisodeIdRoute,
    deleteApiPodcastsIdEpisodeEpisodeIdRouteHandler,
  )
  .openapi(getApiSeriesIdRoute, getApiSeriesIdRouteHandler)
  .openapi(patchApiSeriesIdRoute, patchApiSeriesIdRouteHandler)

export default app
