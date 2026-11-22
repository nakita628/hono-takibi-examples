import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdAuditTrailEmployeeDataRoute,
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAuditTrailPayrollPeriodDataRoute,
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollPeriodDataAuditTrailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditTrailHandler = app
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAuditTrailPayrollPeriodDataRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollPeriodDataAuditTrailRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployerIdAuditTrailEmployeeDataRoute, (c) => {
    throw new Error('Not implemented')
  })
