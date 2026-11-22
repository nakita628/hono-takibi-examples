import { OpenAPIHono } from '@hono/zod-openapi'
import { getWWorkspaceAuditGetIdRoute, getWWorkspaceAuditListRoute } from '../routes'

const app = new OpenAPIHono()

export const auditHandler = app
  .openapi(getWWorkspaceAuditGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAuditListRoute, (c) => {
    throw new Error('Not implemented')
  })
