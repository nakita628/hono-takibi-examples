import { OpenAPIHono } from '@hono/zod-openapi'
import { getApplicationTemplatesCountRoute } from '../routes'

const app = new OpenAPIHono()

export const applicationTemplatesHandler = app.openapi(getApplicationTemplatesCountRoute, (c) => {
  throw new Error('Not implemented')
})
