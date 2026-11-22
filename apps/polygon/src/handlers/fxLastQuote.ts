import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1LastQuoteCurrenciesFromToRoute } from '../routes'

const app = new OpenAPIHono()

export const fxLastQuoteHandler = app.openapi(getV1LastQuoteCurrenciesFromToRoute, (c) => {
  throw new Error('Not implemented')
})
