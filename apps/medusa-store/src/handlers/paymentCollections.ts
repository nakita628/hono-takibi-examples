import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postStorePaymentCollectionsIdPaymentSessionsRoute,
  postStorePaymentCollectionsIdPaymentSessionsSessionIdRoute,
  postStorePaymentCollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentCollectionsHandler = app
  .openapi(postStorePaymentCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorePaymentCollectionsIdPaymentSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorePaymentCollectionsIdPaymentSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
