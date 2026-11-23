import { OpenAPIHono } from '@hono/zod-openapi'
import { getViewsPublishRoute } from '../routes'

const app = new OpenAPIHono()

export const viewsPublishHandler = app.openapi(getViewsPublishRoute, (c) => {
  throw new Error('Not implemented')
})
