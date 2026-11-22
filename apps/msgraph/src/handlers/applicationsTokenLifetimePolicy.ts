import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdTokenLifetimePoliciesRefRoute,
  deleteApplicationsApplicationIdTokenLifetimePoliciesTokenLifetimePolicyIdRefRoute,
  getApplicationsApplicationIdTokenLifetimePoliciesCountRoute,
  getApplicationsApplicationIdTokenLifetimePoliciesRefRoute,
  getApplicationsApplicationIdTokenLifetimePoliciesRoute,
  postApplicationsApplicationIdTokenLifetimePoliciesRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsTokenLifetimePolicyHandler = app
  .openapi(getApplicationsApplicationIdTokenLifetimePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApplicationsApplicationIdTokenLifetimePoliciesTokenLifetimePolicyIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApplicationsApplicationIdTokenLifetimePoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdTokenLifetimePoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdTokenLifetimePoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdTokenLifetimePoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
