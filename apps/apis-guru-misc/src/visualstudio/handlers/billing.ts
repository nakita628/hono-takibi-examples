import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1GenevaActionsBillingEnvironmentIdRoute,
  getApiV1GenevaActionsBillingEnvironmentIdStateChangesRoute,
  postApiV1GenevaActionsBillingEnvironmentIdStateChangesRoute,
  postApiV1GenevaActionsBillingResendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app
  .openapi(postApiV1GenevaActionsBillingResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GenevaActionsBillingEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GenevaActionsBillingEnvironmentIdStateChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsBillingEnvironmentIdStateChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
