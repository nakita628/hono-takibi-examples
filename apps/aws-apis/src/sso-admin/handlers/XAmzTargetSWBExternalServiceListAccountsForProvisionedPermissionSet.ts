import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSetHandler =
  app.openapi(postXAmzTargetSWBExternalServiceListAccountsForProvisionedPermissionSetRoute, (c) => {
    throw new Error('Not implemented')
  })
