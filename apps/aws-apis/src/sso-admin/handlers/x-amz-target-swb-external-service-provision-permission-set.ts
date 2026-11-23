import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceProvisionPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceProvisionPermissionSetHandler = app.openapi(
  postXAmzTargetSWBExternalServiceProvisionPermissionSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
