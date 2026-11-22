import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdOptionsPaymentsRoute,
  getCompaniesCompanyIdDataPaymentsPaymentIdRoute,
  getCompaniesCompanyIdDataPaymentsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
