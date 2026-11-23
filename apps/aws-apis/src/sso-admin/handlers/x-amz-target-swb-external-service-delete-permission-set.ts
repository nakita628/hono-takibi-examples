import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceDeletePermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceDeletePermissionSetHandler = app.openapi(
  postXAmzTargetSWBExternalServiceDeletePermissionSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
