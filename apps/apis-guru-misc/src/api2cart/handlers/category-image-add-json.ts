import { OpenAPIHono } from '@hono/zod-openapi'
import { postCategoryImageAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const categoryImageAddJsonHandler = app.openapi(postCategoryImageAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})
