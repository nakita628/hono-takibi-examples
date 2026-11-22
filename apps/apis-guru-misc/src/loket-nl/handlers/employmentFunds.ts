import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsEmploymentfundsEmploymentFundIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentfundsEmploymentFundIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdEmploymentfundsRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdEmploymentfundsRoute,
  putProvidersEmployersEmployeesEmploymentsEmploymentfundsEmploymentFundIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employmentFundsHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsEmploymentfundsEmploymentFundIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentfundsEmploymentFundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEmploymentsEmploymentfundsEmploymentFundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdEmploymentfundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdEmploymentfundsRoute, (c) => {
    throw new Error('Not implemented')
  })
