import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceGetPermissionsBoundaryForPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceGetPermissionsBoundaryForPermissionSetHandler =
  app.openapi(postXAmzTargetSWBExternalServiceGetPermissionsBoundaryForPermissionSetRoute, (c) => {
    throw new Error('Not implemented')
  })
