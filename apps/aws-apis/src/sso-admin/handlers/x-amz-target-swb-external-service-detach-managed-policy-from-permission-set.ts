import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceDetachManagedPolicyFromPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceDetachManagedPolicyFromPermissionSetHandler = app.openapi(
  postXAmzTargetSWBExternalServiceDetachManagedPolicyFromPermissionSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
