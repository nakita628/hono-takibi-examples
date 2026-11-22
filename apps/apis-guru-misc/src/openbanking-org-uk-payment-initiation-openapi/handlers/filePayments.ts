import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFilePaymentConsentsConsentIdFileRoute,
  getFilePaymentConsentsConsentIdRoute,
  getFilePaymentsFilePaymentIdReportFileRoute,
  getFilePaymentsFilePaymentIdRoute,
  postFilePaymentConsentsConsentIdFileRoute,
  postFilePaymentConsentsRoute,
  postFilePaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filePaymentsHandler = app
  .openapi(postFilePaymentConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilePaymentConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilePaymentConsentsConsentIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilePaymentConsentsConsentIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilePaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilePaymentsFilePaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilePaymentsFilePaymentIdReportFileRoute, (c) => {
    throw new Error('Not implemented')
  })
