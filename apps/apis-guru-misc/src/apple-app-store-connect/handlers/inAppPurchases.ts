import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1InAppPurchasesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const inAppPurchasesHandler = app.openapi(getV1InAppPurchasesIdRoute, (c) => {
  throw new Error('Not implemented')
})
