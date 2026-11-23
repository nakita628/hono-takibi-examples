import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from '../routes'

const app = new OpenAPIHono()

export const gamesHandler = app
  .openapi(getGamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesGamePkAdditionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesGamePkDevelopmentTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesGamePkGameSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesGamePkParentGamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesGamePkScreenshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesGamePkStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesIdAchievementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesIdMoviesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesIdRedditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesIdSuggestedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesIdTwitchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesIdYoutubeRoute, (c) => {
    throw new Error('Not implemented')
  })
