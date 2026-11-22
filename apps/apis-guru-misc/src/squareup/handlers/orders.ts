import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2OrdersOrderIdRoute,
  postV2OrdersBatchRetrieveRoute,
  postV2OrdersCalculateRoute,
  postV2OrdersOrderIdPayRoute,
  postV2OrdersRoute,
  postV2OrdersSearchRoute,
  putV2OrdersOrderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(postV2OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OrdersBatchRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OrdersCalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OrdersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2OrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OrdersOrderIdPayRoute, (c) => {
    throw new Error('Not implemented')
  })
