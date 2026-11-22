import { OpenAPIHono } from '@hono/zod-openapi'
import { getCryptoV1ExchangesRoute } from '../routes'

const app = new OpenAPIHono()

export const globalCryptoHandler = app.openapi(getCryptoV1ExchangesRoute, (c) => {
  throw new Error('Not implemented')
})
