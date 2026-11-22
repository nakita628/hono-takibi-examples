import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceUpdatePermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceUpdatePermissionSetHandler = app.openapi(
  postXAmzTargetSWBExternalServiceUpdatePermissionSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
