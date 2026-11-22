import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1SharedCatalogIdProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedCatalogIdProductsHandler = app.openapi(
  getV1SharedCatalogIdProductsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
