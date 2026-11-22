import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsFiscalcompanycarsFiscalCompanyCarIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdFiscalcompanycarsRoute,
  getProvidersEmployersEmployeesEmploymentsFiscalcompanycarsFiscalCompanyCarIdRoute,
  getRdwservicesAdditionaltaxliabilityRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdFiscalcompanycarsRoute,
  putProvidersEmployersEmployeesEmploymentsFiscalcompanycarsFiscalCompanyCarIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fiscalCompanyCarHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsFiscalcompanycarsFiscalCompanyCarIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsFiscalcompanycarsFiscalCompanyCarIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsFiscalcompanycarsFiscalCompanyCarIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdFiscalcompanycarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdFiscalcompanycarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRdwservicesAdditionaltaxliabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
