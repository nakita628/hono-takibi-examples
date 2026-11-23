import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuditOrganizationsOrganizationIdRoute } from '../routes'

const app = new OpenAPIHono()

export const auditHandler = app.openapi(getAuditOrganizationsOrganizationIdRoute, (c) => {
  throw new Error('Not implemented')
})
