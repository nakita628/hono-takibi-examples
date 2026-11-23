import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAcceptReservedInstancesExchangeQuoteRoute,
  postActionAcceptReservedInstancesExchangeQuoteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAcceptReservedInstancesExchangeQuoteHandler = app
  .openapi(getActionAcceptReservedInstancesExchangeQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAcceptReservedInstancesExchangeQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
