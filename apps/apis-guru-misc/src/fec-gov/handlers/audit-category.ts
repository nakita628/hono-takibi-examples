import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuditCategoryIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const auditCategoryHandler = app.openapi(getAuditCategoryIndexRoute, (c) => {
  throw new Error('Not implemented')
})
