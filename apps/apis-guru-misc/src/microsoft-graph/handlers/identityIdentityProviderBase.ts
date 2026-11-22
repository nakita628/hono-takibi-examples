import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityIdentityProvidersIdentityProviderBaseIdRoute,
  getIdentityIdentityProvidersIdentityProviderBaseIdRoute,
  getIdentityIdentityProvidersRoute,
  patchIdentityIdentityProvidersIdentityProviderBaseIdRoute,
  postIdentityIdentityProvidersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityIdentityProviderBaseHandler = app
  .openapi(getIdentityIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityIdentityProvidersIdentityProviderBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityIdentityProvidersIdentityProviderBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityIdentityProvidersIdentityProviderBaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
