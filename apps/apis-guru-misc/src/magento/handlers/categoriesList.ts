import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CategoriesListRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesListHandler = app.openapi(getV1CategoriesListRoute, (c) => {
  throw new Error('Not implemented')
})
