import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiCheckoutPubGatewayCallbackOrderGroupRoute,
  postApiCheckoutPubOrderFormOrderFormIdTransactionRoute,
  putApiCheckoutPubOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderPlacementHandler = app
  .openapi(postApiCheckoutPubGatewayCallbackOrderGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCheckoutPubOrderFormOrderFormIdTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCheckoutPubOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
