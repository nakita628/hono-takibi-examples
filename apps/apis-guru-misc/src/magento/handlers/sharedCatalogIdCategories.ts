import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1SharedCatalogIdCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedCatalogIdCategoriesHandler = app.openapi(
  getV1SharedCatalogIdCategoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
