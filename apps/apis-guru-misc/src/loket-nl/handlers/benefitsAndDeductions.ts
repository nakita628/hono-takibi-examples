import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsBenefitsAndDeductionsBenefitsanddeductionsIdRoute,
  getProvidersEmployersEmployeesEmploymentsBenefitsAndDeductionsBenefitsanddeductionsIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdBenefitsanddeductionsRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdBenefitsanddeductionsRoute,
  putProvidersEmployersEmployeesEmploymentsBenefitsAndDeductionsBenefitsanddeductionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const benefitsAndDeductionsHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsBenefitsAndDeductionsBenefitsanddeductionsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsBenefitsAndDeductionsBenefitsanddeductionsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsBenefitsAndDeductionsBenefitsanddeductionsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdBenefitsanddeductionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdBenefitsanddeductionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
