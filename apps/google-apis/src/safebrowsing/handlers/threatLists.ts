import { OpenAPIHono } from '@hono/zod-openapi'
import { getV4ThreatListsRoute } from '../routes'

const app = new OpenAPIHono()

export const threatListsHandler = app.openapi(getV4ThreatListsRoute, (c) => {
  throw new Error('Not implemented')
})
