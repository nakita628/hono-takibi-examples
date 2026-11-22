import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryFederationConfigurationsIdentityProviderBaseIdRoute,
  getDirectoryFederationConfigurationsAvailableProviderTypesRoute,
  getDirectoryFederationConfigurationsCountRoute,
  getDirectoryFederationConfigurationsIdentityProviderBaseIdRoute,
  getDirectoryFederationConfigurationsRoute,
  patchDirectoryFederationConfigurationsIdentityProviderBaseIdRoute,
  postDirectoryFederationConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryIdentityProviderBaseHandler = app
  .openapi(getDirectoryFederationConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryFederationConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryFederationConfigurationsIdentityProviderBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryFederationConfigurationsIdentityProviderBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryFederationConfigurationsIdentityProviderBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryFederationConfigurationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryFederationConfigurationsAvailableProviderTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
