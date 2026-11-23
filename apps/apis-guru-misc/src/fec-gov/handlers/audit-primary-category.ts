import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuditPrimaryCategoryIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const auditPrimaryCategoryHandler = app.openapi(getAuditPrimaryCategoryIndexRoute, (c) => {
  throw new Error('Not implemented')
})
