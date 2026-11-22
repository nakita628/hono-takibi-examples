import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CategoriesRoute, postV1CategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getV1CategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
