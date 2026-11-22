import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3PurchasedAssetsRoute } from '../routes'

const app = new OpenAPIHono()

export const purchasesHandler = app.openapi(getV3PurchasedAssetsRoute, (c) => {
  throw new Error('Not implemented')
})
