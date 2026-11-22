import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1LastCryptoFromToRoute } from '../routes'

const app = new OpenAPIHono()

export const cryptoLastTradeHandler = app.openapi(getV1LastCryptoFromToRoute, (c) => {
  throw new Error('Not implemented')
})
