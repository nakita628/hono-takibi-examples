import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListPermissionSetProvisioningStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceListPermissionSetProvisioningStatusHandler = app.openapi(
  postXAmzTargetSWBExternalServiceListPermissionSetProvisioningStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
