import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSwbExternalServiceListAccountsForProvisionedPermissionSetHandler =
  app.openapi(postXAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSetRoute, (c) => {
    throw new Error('Not implemented')
  })
