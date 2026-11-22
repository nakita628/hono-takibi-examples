import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollrunsRoute,
  getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payrollRunHandler = app
  .openapi(getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollrunsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
