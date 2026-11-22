import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2ProductCatalogSkusRoute } from '../routes'

const app = new OpenAPIHono()

export const productCatalogHandler = app.openapi(getApiV2ProductCatalogSkusRoute, (c) => {
  throw new Error('Not implemented')
})
