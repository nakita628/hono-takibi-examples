import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
