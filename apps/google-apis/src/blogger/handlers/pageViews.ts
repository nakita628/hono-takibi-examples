import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3BlogsBlogIdPageviewsRoute } from '../routes'

const app = new OpenAPIHono()

export const pageViewsHandler = app.openapi(getV3BlogsBlogIdPageviewsRoute, (c) => {
  throw new Error('Not implemented')
})
