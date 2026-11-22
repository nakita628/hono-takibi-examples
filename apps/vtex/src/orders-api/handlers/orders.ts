import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiOmsPvtOrdersOrderIdRoute,
  getApiOmsPvtOrdersRoute,
  postApiOmsPvtOrdersOrderIdCancelRoute,
  postApiOmsPvtOrdersOrderIdChangesRoute,
  postApiOmsPvtOrdersOrderIdInteractionsRoute,
  postApiOmsPvtOrdersOrderIdStartHandlingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getApiOmsPvtOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOmsPvtOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOmsPvtOrdersOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOmsPvtOrdersOrderIdChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOmsPvtOrdersOrderIdInteractionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOmsPvtOrdersOrderIdStartHandlingRoute, (c) => {
    throw new Error('Not implemented')
  })
