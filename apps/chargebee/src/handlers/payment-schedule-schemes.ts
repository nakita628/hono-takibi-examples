import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPaymentScheduleSchemesPaymentScheduleSchemeIdRoute,
  getPaymentScheduleSchemesRoute,
  postPaymentScheduleSchemesPaymentScheduleSchemeIdDeleteRoute,
  postPaymentScheduleSchemesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentScheduleSchemesHandler = app
  .openapi(getPaymentScheduleSchemesPaymentScheduleSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentScheduleSchemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentScheduleSchemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentScheduleSchemesPaymentScheduleSchemeIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
