import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetReservedNodeExchangeOfferingsRoute,
  postActionGetReservedNodeExchangeOfferingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetReservedNodeExchangeOfferingsHandler = app
  .openapi(getActionGetReservedNodeExchangeOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetReservedNodeExchangeOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
