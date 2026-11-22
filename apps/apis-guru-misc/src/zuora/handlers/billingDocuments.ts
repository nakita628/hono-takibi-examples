import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AccountsBillingDocumentsFilesDeletionJobsJobIdRoute,
  getV1BillingDocumentsRoute,
  postV1AccountsBillingDocumentsFilesDeletionJobsRoute,
  postV1AccountsIdBillingDocumentsGenerateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingDocumentsHandler = app
  .openapi(postV1AccountsBillingDocumentsFilesDeletionJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsBillingDocumentsFilesDeletionJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsIdBillingDocumentsGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BillingDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
