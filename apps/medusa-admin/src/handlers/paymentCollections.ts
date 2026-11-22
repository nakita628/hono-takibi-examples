import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminPaymentCollectionsIdRoute,
  postAdminPaymentCollectionsIdMarkAsPaidRoute,
  postAdminPaymentCollectionsIdPaymentSessionsRoute,
  postAdminPaymentCollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentCollectionsHandler = app
  .openapi(postAdminPaymentCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminPaymentCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPaymentCollectionsIdMarkAsPaidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPaymentCollectionsIdPaymentSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
