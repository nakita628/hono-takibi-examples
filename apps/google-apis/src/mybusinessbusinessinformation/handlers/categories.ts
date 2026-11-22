import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CategoriesBatchGetRoute, getV1CategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getV1CategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CategoriesBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
