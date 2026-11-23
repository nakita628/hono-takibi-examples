import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceDescribePermissionSetProvisioningStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceDescribePermissionSetProvisioningStatusHandler =
  app.openapi(postXAmzTargetSWBExternalServiceDescribePermissionSetProvisioningStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
