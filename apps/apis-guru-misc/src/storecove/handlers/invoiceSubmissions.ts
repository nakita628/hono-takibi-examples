import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInvoiceSubmissionsGuidEvidenceRoute,
  postInvoiceSubmissionsPreflightRoute,
  postInvoiceSubmissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoiceSubmissionsHandler = app
  .openapi(postInvoiceSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoiceSubmissionsPreflightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoiceSubmissionsGuidEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
