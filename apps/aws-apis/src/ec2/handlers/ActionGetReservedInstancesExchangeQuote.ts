import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetReservedInstancesExchangeQuoteRoute,
  postActionGetReservedInstancesExchangeQuoteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetReservedInstancesExchangeQuoteHandler = app
  .openapi(getActionGetReservedInstancesExchangeQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetReservedInstancesExchangeQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
