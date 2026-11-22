import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdTokenIssuancePoliciesTokenIssuancePolicyIdRefRoute,
  getApplicationsApplicationIdTokenIssuancePoliciesRefRoute,
  getApplicationsApplicationIdTokenIssuancePoliciesRoute,
  postApplicationsApplicationIdTokenIssuancePoliciesRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsTokenIssuancePolicyHandler = app
  .openapi(getApplicationsApplicationIdTokenIssuancePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdTokenIssuancePoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdTokenIssuancePoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApplicationsApplicationIdTokenIssuancePoliciesTokenIssuancePolicyIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
