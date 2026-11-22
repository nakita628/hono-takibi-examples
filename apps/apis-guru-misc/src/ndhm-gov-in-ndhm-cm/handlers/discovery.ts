import { OpenAPIHono } from '@hono/zod-openapi'
import { postV05CareContextsOnDiscoverRoute } from '../routes'

const app = new OpenAPIHono()

export const discoveryHandler = app.openapi(postV05CareContextsOnDiscoverRoute, (c) => {
  throw new Error('Not implemented')
})
