import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuditLogsDirectoryAuditsCountRoute,
  getAuditLogsProvisioningCountRoute,
  getAuditLogsSignInsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditLogsHandler = app
  .openapi(getAuditLogsDirectoryAuditsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditLogsProvisioningCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditLogsSignInsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
