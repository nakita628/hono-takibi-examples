import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2AccountsPremiumIdTransactionsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const premiumHandler = app.openapi(getApiV2AccountsPremiumIdTransactionsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
