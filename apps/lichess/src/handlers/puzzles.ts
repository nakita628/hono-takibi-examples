import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPuzzleActivityRoute,
  getApiPuzzleBatchAngleRoute,
  getApiPuzzleDailyRoute,
  getApiPuzzleDashboardDaysRoute,
  getApiPuzzleIdRoute,
  getApiPuzzleNextRoute,
  getApiPuzzleReplayDaysThemeRoute,
  getApiRacerIdRoute,
  getApiStormDashboardUsernameRoute,
  postApiPuzzleBatchAngleRoute,
  postApiRacerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const puzzlesHandler = app
  .openapi(getApiPuzzleDailyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPuzzleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPuzzleNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPuzzleBatchAngleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPuzzleBatchAngleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPuzzleActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPuzzleReplayDaysThemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPuzzleDashboardDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStormDashboardUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRacerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRacerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
