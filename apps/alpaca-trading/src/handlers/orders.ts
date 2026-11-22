import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2OrdersOrderIdRoute,
  deleteV2OrdersRoute,
  getV2OrdersByClientOrderIdRoute,
  getV2OrdersOrderIdRoute,
  getV2OrdersRoute,
  patchV2OrdersOrderIdRoute,
  postV2OrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(deleteV2OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2OrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2OrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OrdersByClientOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
