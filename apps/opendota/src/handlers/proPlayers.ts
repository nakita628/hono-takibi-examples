import { OpenAPIHono } from '@hono/zod-openapi'
import { getProPlayersRoute } from '../routes'

const app = new OpenAPIHono()

export const proPlayersHandler = app.openapi(getProPlayersRoute, (c) => {
  throw new Error('Not implemented')
})
