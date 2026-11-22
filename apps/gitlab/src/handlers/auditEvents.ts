import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4AuditEventsIdRoute,
  getApiV4AuditEventsRoute,
  getApiV4GroupsIdAuditEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditEventsHandler = app
  .openapi(getApiV4AuditEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AuditEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdAuditEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
