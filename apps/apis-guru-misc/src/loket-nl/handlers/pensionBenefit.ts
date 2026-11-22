import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsPensionbenefitsPensionBenefitIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdPensionbenefitsRoute,
  getProvidersEmployersEmployeesEmploymentsPensionbenefitsPensionBenefitIdRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdPensionbenefitsRoute,
  putProvidersEmployersEmployeesEmploymentsPensionbenefitsPensionBenefitIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pensionBenefitHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsPensionbenefitsPensionBenefitIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsPensionbenefitsPensionBenefitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEmploymentsPensionbenefitsPensionBenefitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdPensionbenefitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdPensionbenefitsRoute, (c) => {
    throw new Error('Not implemented')
  })
