import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1HistoricCryptoFromToDateRoute, getV3TradesCryptoTickerRoute } from '../routes'

const app = new OpenAPIHono()

export const cryptoTradesHandler = app
  .openapi(getV1HistoricCryptoFromToDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TradesCryptoTickerRoute, (c) => {
    throw new Error('Not implemented')
  })
