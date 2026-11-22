import { OpenAPIHono } from '@hono/zod-openapi'
import { getTenantIDServicePrincipalsObjectIdAppRoleAssignedToRoute } from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalAppRoleAssignedToHandler = app.openapi(
  getTenantIDServicePrincipalsObjectIdAppRoleAssignedToRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
