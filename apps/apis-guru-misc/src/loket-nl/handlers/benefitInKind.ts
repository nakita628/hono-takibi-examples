import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsBenefitsinkindBenefitInKindIdRoute,
  getProvidersEmployersEmployeesEmploymentsBenefitsinkindBenefitInKindIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdBenefitsInKindRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdBenefitsInKindRoute,
  putProvidersEmployersEmployeesEmploymentsBenefitsinkindBenefitInKindIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const benefitInKindHandler = app
  .openapi(deleteProvidersEmployersEmployeesEmploymentsBenefitsinkindBenefitInKindIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsBenefitsinkindBenefitInKindIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEmploymentsBenefitsinkindBenefitInKindIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdBenefitsInKindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdBenefitsInKindRoute, (c) => {
    throw new Error('Not implemented')
  })
