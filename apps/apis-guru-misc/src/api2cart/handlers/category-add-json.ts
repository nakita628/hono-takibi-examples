import { OpenAPIHono } from '@hono/zod-openapi'
import { postCategoryAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const categoryAddJsonHandler = app.openapi(postCategoryAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})
