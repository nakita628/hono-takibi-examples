import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1SharedCatalogIdUnassignProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedCatalogIdUnassignProductsHandler = app.openapi(
  postV1SharedCatalogIdUnassignProductsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
