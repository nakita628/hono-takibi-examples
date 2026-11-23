import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTradingCardRoute,
  getTradingCardSearchRoute,
  postTradingCardSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingCardHandler = app
  .openapi(getTradingCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTradingCardSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTradingCardSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
