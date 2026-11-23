import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCreatorRolesRoute,
  getCreatorsIdRoute,
  getCreatorsRoute,
  getDevelopersIdRoute,
  getDevelopersRoute,
  getGamesGamePkAdditionsRoute,
  getGamesGamePkDevelopmentTeamRoute,
  getGamesGamePkGameSeriesRoute,
  getGamesGamePkParentGamesRoute,
  getGamesGamePkScreenshotsRoute,
  getGamesGamePkStoresRoute,
  getGamesIdAchievementsRoute,
  getGamesIdMoviesRoute,
  getGamesIdRedditRoute,
  getGamesIdRoute,
  getGamesIdSuggestedRoute,
  getGamesIdTwitchRoute,
  getGamesIdYoutubeRoute,
  getGamesRoute,
  getGenresIdRoute,
  getGenresRoute,
  getPlatformsIdRoute,
  getPlatformsListsParentsRoute,
  getPlatformsRoute,
  getPublishersIdRoute,
  getPublishersRoute,
  getStoresIdRoute,
  getStoresRoute,
  getTagsIdRoute,
  getTagsRoute,
} from './routes'
import {
  getCreatorRolesRouteHandler,
  getCreatorsIdRouteHandler,
  getCreatorsRouteHandler,
  getDevelopersIdRouteHandler,
  getDevelopersRouteHandler,
  getGamesGamePkAdditionsRouteHandler,
  getGamesGamePkDevelopmentTeamRouteHandler,
  getGamesGamePkGameSeriesRouteHandler,
  getGamesGamePkParentGamesRouteHandler,
  getGamesGamePkScreenshotsRouteHandler,
  getGamesGamePkStoresRouteHandler,
  getGamesIdAchievementsRouteHandler,
  getGamesIdMoviesRouteHandler,
  getGamesIdRedditRouteHandler,
  getGamesIdRouteHandler,
  getGamesIdSuggestedRouteHandler,
  getGamesIdTwitchRouteHandler,
  getGamesIdYoutubeRouteHandler,
  getGamesRouteHandler,
  getGenresIdRouteHandler,
  getGenresRouteHandler,
  getPlatformsIdRouteHandler,
  getPlatformsListsParentsRouteHandler,
  getPlatformsRouteHandler,
  getPublishersIdRouteHandler,
  getPublishersRouteHandler,
  getStoresIdRouteHandler,
  getStoresRouteHandler,
  getTagsIdRouteHandler,
  getTagsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCreatorRolesRoute, getCreatorRolesRouteHandler)
  .openapi(getCreatorsRoute, getCreatorsRouteHandler)
  .openapi(getCreatorsIdRoute, getCreatorsIdRouteHandler)
  .openapi(getDevelopersRoute, getDevelopersRouteHandler)
  .openapi(getDevelopersIdRoute, getDevelopersIdRouteHandler)
  .openapi(getGamesRoute, getGamesRouteHandler)
  .openapi(getGamesGamePkAdditionsRoute, getGamesGamePkAdditionsRouteHandler)
  .openapi(getGamesGamePkDevelopmentTeamRoute, getGamesGamePkDevelopmentTeamRouteHandler)
  .openapi(getGamesGamePkGameSeriesRoute, getGamesGamePkGameSeriesRouteHandler)
  .openapi(getGamesGamePkParentGamesRoute, getGamesGamePkParentGamesRouteHandler)
  .openapi(getGamesGamePkScreenshotsRoute, getGamesGamePkScreenshotsRouteHandler)
  .openapi(getGamesGamePkStoresRoute, getGamesGamePkStoresRouteHandler)
  .openapi(getGamesIdRoute, getGamesIdRouteHandler)
  .openapi(getGamesIdAchievementsRoute, getGamesIdAchievementsRouteHandler)
  .openapi(getGamesIdMoviesRoute, getGamesIdMoviesRouteHandler)
  .openapi(getGamesIdRedditRoute, getGamesIdRedditRouteHandler)
  .openapi(getGamesIdSuggestedRoute, getGamesIdSuggestedRouteHandler)
  .openapi(getGamesIdTwitchRoute, getGamesIdTwitchRouteHandler)
  .openapi(getGamesIdYoutubeRoute, getGamesIdYoutubeRouteHandler)
  .openapi(getGenresRoute, getGenresRouteHandler)
  .openapi(getGenresIdRoute, getGenresIdRouteHandler)
  .openapi(getPlatformsRoute, getPlatformsRouteHandler)
  .openapi(getPlatformsListsParentsRoute, getPlatformsListsParentsRouteHandler)
  .openapi(getPlatformsIdRoute, getPlatformsIdRouteHandler)
  .openapi(getPublishersRoute, getPublishersRouteHandler)
  .openapi(getPublishersIdRoute, getPublishersIdRouteHandler)
  .openapi(getStoresRoute, getStoresRouteHandler)
  .openapi(getStoresIdRoute, getStoresIdRouteHandler)
  .openapi(getTagsRoute, getTagsRouteHandler)
  .openapi(getTagsIdRoute, getTagsIdRouteHandler)

export default app
