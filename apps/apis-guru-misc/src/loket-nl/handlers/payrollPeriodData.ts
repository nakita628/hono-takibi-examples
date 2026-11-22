import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsPayrollperioddataPayrollperioddataIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdPayrollperioddataRoute,
  getProvidersEmployersEmployeesEmploymentsPayrollperioddataPayrollperioddataIdRoute,
  patchProvidersEmployersEmployeesEmploymentsEmploymentIdPayrollperioddataRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdPayrollperioddataRoute,
  putProvidersEmployersEmployeesEmploymentsPayrollperioddataPayrollperioddataIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payrollPeriodDataHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsPayrollperioddataPayrollperioddataIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsPayrollperioddataPayrollperioddataIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsPayrollperioddataPayrollperioddataIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdPayrollperioddataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersEmployeesEmploymentsEmploymentIdPayrollperioddataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdPayrollperioddataRoute, (c) => {
    throw new Error('Not implemented')
  })
