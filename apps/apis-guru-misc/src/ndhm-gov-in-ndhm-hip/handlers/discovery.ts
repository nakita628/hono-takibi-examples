import { OpenAPIHono } from '@hono/zod-openapi'
import { postV05CareContextsDiscoverRoute } from '../routes'

const app = new OpenAPIHono()

export const discoveryHandler = app.openapi(postV05CareContextsDiscoverRoute, (c) => {
  throw new Error('Not implemented')
})
