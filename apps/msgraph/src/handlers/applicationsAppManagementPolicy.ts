import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdAppManagementPoliciesAppManagementPolicyIdRefRoute,
  deleteApplicationsApplicationIdAppManagementPoliciesRefRoute,
  getApplicationsApplicationIdAppManagementPoliciesCountRoute,
  getApplicationsApplicationIdAppManagementPoliciesRefRoute,
  getApplicationsApplicationIdAppManagementPoliciesRoute,
  postApplicationsApplicationIdAppManagementPoliciesRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsAppManagementPolicyHandler = app
  .openapi(getApplicationsApplicationIdAppManagementPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApplicationsApplicationIdAppManagementPoliciesAppManagementPolicyIdRefRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApplicationsApplicationIdAppManagementPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdAppManagementPoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdAppManagementPoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdAppManagementPoliciesRefRoute, (c) => {
    throw new Error('Not implemented')
  })
