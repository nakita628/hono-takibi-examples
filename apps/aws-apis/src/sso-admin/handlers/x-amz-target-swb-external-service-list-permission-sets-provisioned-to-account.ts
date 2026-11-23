import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListPermissionSetsProvisionedToAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceListPermissionSetsProvisionedToAccountHandler =
  app.openapi(postXAmzTargetSWBExternalServiceListPermissionSetsProvisionedToAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
