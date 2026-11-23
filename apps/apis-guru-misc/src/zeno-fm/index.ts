import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRoute,
  deleteApiV2PodcastsPodcastKeyRoute,
  getApiV2PodcastsCategoriesRoute,
  getApiV2PodcastsCountriesRoute,
  getApiV2PodcastsLanguagesRoute,
  getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRoute,
  getApiV2PodcastsPodcastKeyEpisodesRoute,
  getApiV2PodcastsPodcastKeyRoute,
  getApiV2StationsCountriesRoute,
  getApiV2StationsGenresRoute,
  getApiV2StationsLanguagesRoute,
  getApiV2StationsListRoute,
  postApiV2PodcastsCreateRoute,
  postApiV2PodcastsPodcastKeyEpisodesCreateRoute,
  postApiV2PodcastsSearchRoute,
  postApiV2StationsSearchRoute,
  putApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRoute,
  putApiV2PodcastsPodcastKeyRoute,
} from './routes'
import {
  deleteApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRouteHandler,
  deleteApiV2PodcastsPodcastKeyRouteHandler,
  getApiV2PodcastsCategoriesRouteHandler,
  getApiV2PodcastsCountriesRouteHandler,
  getApiV2PodcastsLanguagesRouteHandler,
  getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRouteHandler,
  getApiV2PodcastsPodcastKeyEpisodesRouteHandler,
  getApiV2PodcastsPodcastKeyRouteHandler,
  getApiV2StationsCountriesRouteHandler,
  getApiV2StationsGenresRouteHandler,
  getApiV2StationsLanguagesRouteHandler,
  getApiV2StationsListRouteHandler,
  postApiV2PodcastsCreateRouteHandler,
  postApiV2PodcastsPodcastKeyEpisodesCreateRouteHandler,
  postApiV2PodcastsSearchRouteHandler,
  postApiV2StationsSearchRouteHandler,
  putApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRouteHandler,
  putApiV2PodcastsPodcastKeyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV2PodcastsCategoriesRoute, getApiV2PodcastsCategoriesRouteHandler)
  .openapi(getApiV2PodcastsCountriesRoute, getApiV2PodcastsCountriesRouteHandler)
  .openapi(postApiV2PodcastsCreateRoute, postApiV2PodcastsCreateRouteHandler)
  .openapi(getApiV2PodcastsLanguagesRoute, getApiV2PodcastsLanguagesRouteHandler)
  .openapi(postApiV2PodcastsSearchRoute, postApiV2PodcastsSearchRouteHandler)
  .openapi(deleteApiV2PodcastsPodcastKeyRoute, deleteApiV2PodcastsPodcastKeyRouteHandler)
  .openapi(getApiV2PodcastsPodcastKeyRoute, getApiV2PodcastsPodcastKeyRouteHandler)
  .openapi(putApiV2PodcastsPodcastKeyRoute, putApiV2PodcastsPodcastKeyRouteHandler)
  .openapi(getApiV2PodcastsPodcastKeyEpisodesRoute, getApiV2PodcastsPodcastKeyEpisodesRouteHandler)
  .openapi(
    postApiV2PodcastsPodcastKeyEpisodesCreateRoute,
    postApiV2PodcastsPodcastKeyEpisodesCreateRouteHandler,
  )
  .openapi(
    deleteApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRoute,
    deleteApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRouteHandler,
  )
  .openapi(
    getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRoute,
    getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRouteHandler,
  )
  .openapi(
    putApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRoute,
    putApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRouteHandler,
  )
  .openapi(getApiV2StationsCountriesRoute, getApiV2StationsCountriesRouteHandler)
  .openapi(getApiV2StationsGenresRoute, getApiV2StationsGenresRouteHandler)
  .openapi(getApiV2StationsLanguagesRoute, getApiV2StationsLanguagesRouteHandler)
  .openapi(getApiV2StationsListRoute, getApiV2StationsListRouteHandler)
  .openapi(postApiV2StationsSearchRoute, postApiV2StationsSearchRouteHandler)

export default app
