import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceCreatePermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceCreatePermissionSetHandler = app.openapi(
  postXAmzTargetSWBExternalServiceCreatePermissionSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
