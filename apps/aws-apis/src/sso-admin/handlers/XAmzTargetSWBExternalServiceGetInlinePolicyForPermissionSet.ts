import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSetHandler = app.openapi(
  postXAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
