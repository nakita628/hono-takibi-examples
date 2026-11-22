import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSetHandler = app.openapi(
  postXAmzTargetSWBExternalServiceListManagedPoliciesInPermissionSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
