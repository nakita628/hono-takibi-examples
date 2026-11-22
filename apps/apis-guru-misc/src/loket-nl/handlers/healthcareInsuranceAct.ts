import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsHealthcareinsuranceactconfigurationsHealthcareInsuranceActConfigurationIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdHealthcareinsuranceactconfigurationsRoute,
  getProvidersEmployersEmployeesEmploymentsHealthcareinsuranceactconfigurationsHealthcareInsuranceActConfigurationIdRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdHealthcareinsuranceactconfigurationsRoute,
  putProvidersEmployersEmployeesEmploymentsHealthcareinsuranceactconfigurationsHealthcareInsuranceActConfigurationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const healthcareInsuranceActHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsHealthcareinsuranceactconfigurationsHealthcareInsuranceActConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsHealthcareinsuranceactconfigurationsHealthcareInsuranceActConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsHealthcareinsuranceactconfigurationsHealthcareInsuranceActConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsEmploymentIdHealthcareinsuranceactconfigurationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdHealthcareinsuranceactconfigurationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
