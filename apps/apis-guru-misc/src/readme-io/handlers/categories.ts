import { OpenAPIHono } from '@hono/zod-openapi'
import { getCategoriesSlugDocsRoute, getCategoriesSlugRoute } from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getCategoriesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesSlugDocsRoute, (c) => {
    throw new Error('Not implemented')
  })
