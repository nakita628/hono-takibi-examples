import { OpenAPIHono } from '@hono/zod-openapi'
import { getGamesRoute, getGamesTopRoute } from '../routes'

const app = new OpenAPIHono()

export const gamesHandler = app
  .openapi(getGamesTopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGamesRoute, (c) => {
    throw new Error('Not implemented')
  })
