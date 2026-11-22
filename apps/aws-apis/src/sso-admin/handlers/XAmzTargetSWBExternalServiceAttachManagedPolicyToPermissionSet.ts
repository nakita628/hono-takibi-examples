import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceAttachManagedPolicyToPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceAttachManagedPolicyToPermissionSetHandler = app.openapi(
  postXAmzTargetSWBExternalServiceAttachManagedPolicyToPermissionSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
