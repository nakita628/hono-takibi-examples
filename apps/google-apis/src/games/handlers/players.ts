import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGamesV1PlayersMeMultipleApplicationPlayerIdsRoute,
  getGamesV1PlayersMePlayersCollectionRoute,
  getGamesV1PlayersMeScopedIdsRoute,
  getGamesV1PlayersPlayerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playersHandler = app
  .openapi(getGamesV1PlayersMeMultipleApplicationPlayerIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1PlayersMePlayersCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1PlayersMeScopedIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesV1PlayersPlayerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
