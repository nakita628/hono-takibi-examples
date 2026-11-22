import { OpenAPIHono } from '@hono/zod-openapi'
import { postViewsListRoute } from '../routes'

const app = new OpenAPIHono()

export const viewsHandler = app.openapi(postViewsListRoute, (c) => {
  throw new Error('Not implemented')
})
