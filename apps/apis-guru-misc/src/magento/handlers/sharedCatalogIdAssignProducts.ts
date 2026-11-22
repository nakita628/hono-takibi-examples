import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1SharedCatalogIdAssignProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedCatalogIdAssignProductsHandler = app.openapi(
  postV1SharedCatalogIdAssignProductsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
