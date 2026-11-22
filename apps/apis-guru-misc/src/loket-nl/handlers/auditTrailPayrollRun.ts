import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersPayrolladministrationsPayrollAdministrationIdEmploymentPayrollDataAuditTrailRoute } from '../routes'

const app = new OpenAPIHono()

export const auditTrailPayrollRunHandler = app.openapi(
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdEmploymentPayrollDataAuditTrailRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
