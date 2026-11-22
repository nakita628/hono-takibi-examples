import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1Games32881Route, getApiV1GamesRoute } from '../routes'

const app = new OpenAPIHono()

export const gamesHandler = app
  .openapi(getApiV1GamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1Games32881Route, (c) => {
    throw new Error('Not implemented')
  })
