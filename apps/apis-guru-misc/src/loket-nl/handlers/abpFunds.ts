import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsAbpfundsAbpFundIdRoute,
  getProvidersEmployersEmployeesEmploymentsAbpfundsAbpFundIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdAbpfundsRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdAbpfundsRoute,
  putProvidersEmployersEmployeesEmploymentsAbpfundsAbpFundIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const abpFundsHandler = app
  .openapi(deleteProvidersEmployersEmployeesEmploymentsAbpfundsAbpFundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsAbpfundsAbpFundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEmploymentsAbpfundsAbpFundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdAbpfundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdAbpfundsRoute, (c) => {
    throw new Error('Not implemented')
  })
