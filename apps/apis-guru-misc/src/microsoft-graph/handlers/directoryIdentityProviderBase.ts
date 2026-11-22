import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryFederationConfigurationsIdentityProviderBaseIdRoute,
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
  .openapi(deleteDirectoryFederationConfigurationsIdentityProviderBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryFederationConfigurationsIdentityProviderBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryFederationConfigurationsIdentityProviderBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
