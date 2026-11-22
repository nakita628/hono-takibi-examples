import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsOtherPayrollVariablesOtherPayrollVariablesIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdOtherPayrollVariablesRoute,
  getProvidersEmployersEmployeesEmploymentsOtherPayrollVariablesOtherPayrollVariablesIdRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdOtherPayrollVariablesRoute,
  putProvidersEmployersEmployeesEmploymentsOtherPayrollVariablesOtherPayrollVariablesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const otherPayrollVariablesHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsOtherPayrollVariablesOtherPayrollVariablesIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsOtherPayrollVariablesOtherPayrollVariablesIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsOtherPayrollVariablesOtherPayrollVariablesIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdOtherPayrollVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdOtherPayrollVariablesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
