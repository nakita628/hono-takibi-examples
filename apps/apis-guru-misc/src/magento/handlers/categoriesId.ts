import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CategoriesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesIdHandler = app.openapi(putV1CategoriesIdRoute, (c) => {
  throw new Error('Not implemented')
})
