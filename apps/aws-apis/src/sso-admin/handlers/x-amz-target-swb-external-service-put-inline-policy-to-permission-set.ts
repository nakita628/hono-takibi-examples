import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServicePutInlinePolicyToPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServicePutInlinePolicyToPermissionSetHandler = app.openapi(
  postXAmzTargetSWBExternalServicePutInlinePolicyToPermissionSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
