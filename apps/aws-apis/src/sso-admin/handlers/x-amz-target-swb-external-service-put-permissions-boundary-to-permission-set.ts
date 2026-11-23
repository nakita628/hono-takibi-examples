import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServicePutPermissionsBoundaryToPermissionSetHandler = app.openapi(
  postXAmzTargetSWBExternalServicePutPermissionsBoundaryToPermissionSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
