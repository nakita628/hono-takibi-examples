import { OpenAPIHono } from '@hono/zod-openapi'
import { getResourcesJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const resourcesJsonHandler = app.openapi(getResourcesJsonRoute, (c) => {
  throw new Error('Not implemented')
})
