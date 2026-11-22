import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CategoriesAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesAttributesHandler = app.openapi(getV1CategoriesAttributesRoute, (c) => {
  throw new Error('Not implemented')
})
