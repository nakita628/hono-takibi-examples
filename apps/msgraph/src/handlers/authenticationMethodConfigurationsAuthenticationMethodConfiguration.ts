import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
  getAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
  getAuthenticationMethodConfigurationsCountRoute,
  getAuthenticationMethodConfigurationsRoute,
  patchAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
  postAuthenticationMethodConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationMethodConfigurationsAuthenticationMethodConfigurationHandler = app
  .openapi(getAuthenticationMethodConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticationMethodConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAuthenticationMethodConfigurationsAuthenticationMethodConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAuthenticationMethodConfigurationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
