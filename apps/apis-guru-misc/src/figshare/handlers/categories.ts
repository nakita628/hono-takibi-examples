import { OpenAPIHono } from '@hono/zod-openapi'
import { getCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app.openapi(getCategoriesRoute, (c) => {
  throw new Error('Not implemented')
})
