import { OpenAPIHono } from '@hono/zod-openapi'
import { getV4CategoriesBatchGetRoute, getV4CategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getV4CategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4CategoriesBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
