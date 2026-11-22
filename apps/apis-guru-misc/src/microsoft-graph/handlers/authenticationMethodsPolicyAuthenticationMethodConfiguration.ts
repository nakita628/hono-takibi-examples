import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
  getAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
  getAuthenticationMethodsPolicyAuthenticationMethodConfigurationsRoute,
  patchAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
  postAuthenticationMethodsPolicyAuthenticationMethodConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationMethodsPolicyAuthenticationMethodConfigurationHandler = app
  .openapi(getAuthenticationMethodsPolicyAuthenticationMethodConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticationMethodsPolicyAuthenticationMethodConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAuthenticationMethodsPolicyAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
