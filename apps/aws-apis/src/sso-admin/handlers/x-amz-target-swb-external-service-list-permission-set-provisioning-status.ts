import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListPermissionSetProvisioningStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceListPermissionSetProvisioningStatusHandler = app.openapi(
  postXAmzTargetSWBExternalServiceListPermissionSetProvisioningStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
