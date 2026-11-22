import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAcceptReservedInstancesExchangeQuoteRoute,
  postActionAcceptReservedInstancesExchangeQuoteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAcceptReservedInstancesExchangeQuoteHandler = app
  .openapi(getActionAcceptReservedInstancesExchangeQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAcceptReservedInstancesExchangeQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
