import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTradingCardDeckRoute,
  getTradingCardDeckSearchRoute,
  postTradingCardDeckSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingCardDeckHandler = app
  .openapi(getTradingCardDeckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTradingCardDeckSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTradingCardDeckSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
