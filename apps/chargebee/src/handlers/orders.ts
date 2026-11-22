import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrdersOrderIdRoute,
  getOrdersRoute,
  postOrdersImportOrderRoute,
  postOrdersOrderIdAssignOrderNumberRoute,
  postOrdersOrderIdCancelRoute,
  postOrdersOrderIdCreateRefundableCreditNoteRoute,
  postOrdersOrderIdDeleteRoute,
  postOrdersOrderIdReopenRoute,
  postOrdersOrderIdResendRoute,
  postOrdersOrderIdRoute,
  postOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersImportOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersOrderIdAssignOrderNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersOrderIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersOrderIdReopenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersOrderIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersOrderIdCreateRefundableCreditNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
