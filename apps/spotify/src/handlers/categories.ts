import { OpenAPIHono } from '@hono/zod-openapi'
import { getBrowseCategoriesCategoryIdRoute, getBrowseCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getBrowseCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowseCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
