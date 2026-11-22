import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUnbilledChargesRoute,
  postUnbilledChargesInvoiceNowEstimateRoute,
  postUnbilledChargesInvoiceUnbilledChargesRoute,
  postUnbilledChargesRoute,
  postUnbilledChargesUnbilledChargeIdDeleteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const unbilledChargesHandler = app
  .openapi(postUnbilledChargesUnbilledChargeIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUnbilledChargesInvoiceNowEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUnbilledChargesInvoiceUnbilledChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnbilledChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUnbilledChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
