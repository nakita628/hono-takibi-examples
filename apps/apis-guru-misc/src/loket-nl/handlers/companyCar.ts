import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsCompanycarsCompanyCarIdRoute,
  getProvidersEmployersEmployeesEmploymentsCompanycarsCompanyCarIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdCompanycarsRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdCompanycarsRoute,
  putProvidersEmployersEmployeesEmploymentsCompanycarsCompanyCarIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companyCarHandler = app
  .openapi(deleteProvidersEmployersEmployeesEmploymentsCompanycarsCompanyCarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsCompanycarsCompanyCarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEmploymentsCompanycarsCompanyCarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdCompanycarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdCompanycarsRoute, (c) => {
    throw new Error('Not implemented')
  })
