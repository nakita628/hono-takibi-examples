import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFilePaymentsFilePaymentIdPaymentDetailsRoute,
  getFilePaymentsFilePaymentIdReportFileRoute,
  getFilePaymentsFilePaymentIdRoute,
  postFilePaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filePaymentsHandler = app
  .openapi(postFilePaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilePaymentsFilePaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilePaymentsFilePaymentIdPaymentDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilePaymentsFilePaymentIdReportFileRoute, (c) => {
    throw new Error('Not implemented')
  })
