import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTradingCardSetRoute,
  getTradingCardSetSearchRoute,
  postTradingCardSetSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingCardSetHandler = app
  .openapi(getTradingCardSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTradingCardSetSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTradingCardSetSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
