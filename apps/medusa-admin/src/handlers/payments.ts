import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminPaymentsIdRoute,
  getAdminPaymentsPaymentProvidersRoute,
  getAdminPaymentsRoute,
  postAdminPaymentsIdCaptureRoute,
  postAdminPaymentsIdRefundRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(getAdminPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPaymentsPaymentProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPaymentsIdCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPaymentsIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
