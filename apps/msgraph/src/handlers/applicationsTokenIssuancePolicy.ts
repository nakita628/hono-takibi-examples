import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdTokenIssuancePoliciesRefRoute,
  deleteApplicationsApplicationIdTokenIssuancePoliciesTokenIssuancePolicyIdRefRoute,
  getApplicationsApplicationIdTokenIssuancePoliciesCountRoute,
  getApplicationsApplicationIdTokenIssuancePoliciesRefRoute,
  getApplicationsApplicationIdTokenIssuancePoliciesRoute,
  postApplicationsApplicationIdTokenIssuancePoliciesRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsTokenIssuancePolicyHandler = app
  .openapi(getApplicationsApplicationIdTokenIssuancePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApplicationsApplicationIdTokenIssuancePoliciesTokenIssuancePolicyIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApplicationsApplicationIdTokenIssuancePoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdTokenIssuancePoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdTokenIssuancePoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdTokenIssuancePoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
