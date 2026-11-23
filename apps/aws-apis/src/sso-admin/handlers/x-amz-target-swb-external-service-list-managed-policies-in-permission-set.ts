import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceListManagedPoliciesInPermissionSetHandler = app.openapi(
  postXAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
