import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSetHandler = app.openapi(
  postXAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
