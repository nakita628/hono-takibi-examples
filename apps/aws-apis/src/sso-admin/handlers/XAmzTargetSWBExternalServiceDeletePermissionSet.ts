import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceDeletePermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceDeletePermissionSetHandler = app.openapi(
  postXAmzTargetSWBExternalServiceDeletePermissionSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
