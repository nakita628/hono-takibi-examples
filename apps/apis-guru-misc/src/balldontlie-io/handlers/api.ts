import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1Games32881Route,
  getApiV1GamesRoute,
  getApiV1Players237Route,
  getApiV1PlayersRoute,
  getApiV1StatsRoute,
  getApiV1Teams1Route,
  getApiV1TeamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1GamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1Games32881Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1Players237Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1Teams1Route, (c) => {
    throw new Error('Not implemented')
  })
