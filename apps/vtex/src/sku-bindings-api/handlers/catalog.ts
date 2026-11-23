import { OpenAPIHono } from '@hono/zod-openapi'
import { getCatalogPvtSkusellersSkuIdRoute } from '../routes'

const app = new OpenAPIHono()

export const catalogHandler = app.openapi(getCatalogPvtSkusellersSkuIdRoute, (c) => {
  throw new Error('Not implemented')
})
