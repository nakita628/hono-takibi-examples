import { OpenAPIHono } from '@hono/zod-openapi'
import { getHostReputationRoute } from '../routes'

const app = new OpenAPIHono()

export const hostReputationHandler = app.openapi(getHostReputationRoute, (c) => {
  throw new Error('Not implemented')
})
