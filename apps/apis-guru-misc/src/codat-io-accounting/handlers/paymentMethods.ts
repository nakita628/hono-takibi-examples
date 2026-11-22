import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdRoute,
  getCompaniesCompanyIdDataPaymentMethodsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentMethodsHandler = app
  .openapi(getCompaniesCompanyIdDataPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
