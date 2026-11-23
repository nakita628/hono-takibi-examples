import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationsOrgIdAuditLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app.openapi(getOrganizationsOrgIdAuditLogsRoute, (c) => {
  throw new Error('Not implemented')
})
