import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsAppSlugRoute } from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app.openapi(getAppsAppSlugRoute, (c) => {
  throw new Error('Not implemented')
})
