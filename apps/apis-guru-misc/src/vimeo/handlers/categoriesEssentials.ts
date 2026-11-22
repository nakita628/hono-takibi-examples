import { OpenAPIHono } from '@hono/zod-openapi'
import { getCategoriesCategoryRoute, getCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesEssentialsHandler = app
  .openapi(getCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
