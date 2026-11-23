import { OpenAPIHono } from '@hono/zod-openapi'
import { getArticlesearchJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const articlesearchJsonHandler = app.openapi(getArticlesearchJsonRoute, (c) => {
  throw new Error('Not implemented')
})
