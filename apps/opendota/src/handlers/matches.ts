import { OpenAPIHono } from '@hono/zod-openapi'
import { getMatchesMatchIdRoute } from '../routes'

const app = new OpenAPIHono()

export const matchesHandler = app.openapi(getMatchesMatchIdRoute, (c) => {
  throw new Error('Not implemented')
})
