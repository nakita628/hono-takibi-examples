import { OpenAPIHono } from '@hono/zod-openapi'
import { postV4ThreatListUpdatesFetchRoute } from '../routes'

const app = new OpenAPIHono()

export const threatListUpdatesHandler = app.openapi(postV4ThreatListUpdatesFetchRoute, (c) => {
  throw new Error('Not implemented')
})
