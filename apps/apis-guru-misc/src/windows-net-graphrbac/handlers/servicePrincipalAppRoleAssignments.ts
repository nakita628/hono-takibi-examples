import { OpenAPIHono } from '@hono/zod-openapi'
import { getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalAppRoleAssignmentsHandler = app.openapi(
  getTenantIDServicePrincipalsObjectIdAppRoleAssignmentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
