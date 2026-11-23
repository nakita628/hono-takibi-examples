import { OpenAPIHono } from '@hono/zod-openapi'
import { putCategoriesIdJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app.openapi(putCategoriesIdJsonRoute, (c) => {
  throw new Error('Not implemented')
})
