import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStoreOrdersIdRoute,
  getStoreOrdersRoute,
  postStoreOrdersIdTransferAcceptRoute,
  postStoreOrdersIdTransferCancelRoute,
  postStoreOrdersIdTransferDeclineRoute,
  postStoreOrdersIdTransferRequestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getStoreOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreOrdersIdTransferAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreOrdersIdTransferCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreOrdersIdTransferDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreOrdersIdTransferRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
