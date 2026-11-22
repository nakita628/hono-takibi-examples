import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupGroupIdAuditRoute, postOrgOrgIdAuditRoute } from '../routes'

const app = new OpenAPIHono()

export const auditLogsHandler = app
  .openapi(postGroupGroupIdAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
