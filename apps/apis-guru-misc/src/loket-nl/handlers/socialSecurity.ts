import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsSocialsecurityconfigurationsSocialSecurityConfigurationIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdSocialsecurityconfigurationsRoute,
  getProvidersEmployersEmployeesEmploymentsSocialsecurityconfigurationsSocialSecurityConfigurationIdRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdSocialsecurityconfigurationsRoute,
  putProvidersEmployersEmployeesEmploymentsSocialsecurityconfigurationsSocialSecurityConfigurationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const socialSecurityHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsSocialsecurityconfigurationsSocialSecurityConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsSocialsecurityconfigurationsSocialSecurityConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsSocialsecurityconfigurationsSocialSecurityConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsEmploymentIdSocialsecurityconfigurationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdSocialsecurityconfigurationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
