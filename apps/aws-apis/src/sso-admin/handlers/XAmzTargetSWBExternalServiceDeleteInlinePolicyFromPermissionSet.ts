import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceDeleteInlinePolicyFromPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceDeleteInlinePolicyFromPermissionSetHandler = app.openapi(
  postXAmzTargetSWBExternalServiceDeleteInlinePolicyFromPermissionSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
