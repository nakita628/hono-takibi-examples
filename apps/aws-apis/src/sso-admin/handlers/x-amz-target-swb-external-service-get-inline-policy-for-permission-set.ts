import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceGetInlinePolicyForPermissionSetHandler = app.openapi(
  postXAmzTargetSWBExternalServiceGetInlinePolicyForPermissionSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
