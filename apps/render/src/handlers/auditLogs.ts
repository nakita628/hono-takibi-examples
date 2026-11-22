import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationsOrgIdAuditLogsRoute, getOwnersOwnerIdAuditLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const auditLogsHandler = app
  .openapi(getOwnersOwnerIdAuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgIdAuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
