import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceDeletePermissionsBoundaryFromPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceDeletePermissionsBoundaryFromPermissionSetHandler =
  app.openapi(
    postXAmzTargetSWBExternalServiceDeletePermissionsBoundaryFromPermissionSetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
