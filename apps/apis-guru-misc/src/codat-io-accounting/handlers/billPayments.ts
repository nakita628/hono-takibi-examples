import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPaymentsRoute,
  getCompaniesCompanyIdDataBillPaymentsBillPaymentIdRoute,
  getCompaniesCompanyIdDataBillPaymentsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billPaymentsHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsBillPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCompaniesCompanyIdConnectionsConnectionIdPushBillPaymentsBillPaymentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdDataBillPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataBillPaymentsBillPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
