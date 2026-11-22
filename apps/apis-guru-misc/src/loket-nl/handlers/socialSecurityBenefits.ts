import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsSocialsecuritybenefitsSocialSecurityBenefitIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdSocialsecuritybenefitsRoute,
  getProvidersEmployersEmployeesEmploymentsSocialsecuritybenefitsSocialSecurityBenefitIdRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdSocialsecuritybenefitsRoute,
  putProvidersEmployersEmployeesEmploymentsSocialsecuritybenefitsSocialSecurityBenefitIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const socialSecurityBenefitsHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsSocialsecuritybenefitsSocialSecurityBenefitIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsSocialsecuritybenefitsSocialSecurityBenefitIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsSocialsecuritybenefitsSocialSecurityBenefitIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsEmploymentIdSocialsecuritybenefitsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdSocialsecuritybenefitsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
