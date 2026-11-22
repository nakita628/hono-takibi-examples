import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiCatalogSystemPvtProductsGetIndexedInfoProductIdRoute } from '../routes'

const app = new OpenAPIHono()

export const productIndexingHandler = app.openapi(
  getApiCatalogSystemPvtProductsGetIndexedInfoProductIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
