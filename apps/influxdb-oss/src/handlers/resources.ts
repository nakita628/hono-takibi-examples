import { OpenAPIHono } from '@hono/zod-openapi'
import { getResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app.openapi(getResourcesRoute, (c) => {
  throw new Error('Not implemented')
})
