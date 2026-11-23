import { OpenAPIHono } from '@hono/zod-openapi'
import { postCategoriesGetRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app.openapi(postCategoriesGetRoute, (c) => {
  throw new Error('Not implemented')
})
