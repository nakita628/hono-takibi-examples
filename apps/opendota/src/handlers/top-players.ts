import { OpenAPIHono } from '@hono/zod-openapi'
import { getTopPlayersRoute } from '../routes'

const app = new OpenAPIHono()

export const topPlayersHandler = app.openapi(getTopPlayersRoute, (c) => {
  throw new Error('Not implemented')
})
