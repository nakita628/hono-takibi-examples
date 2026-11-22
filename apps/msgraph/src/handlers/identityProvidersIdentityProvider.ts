import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityProvidersIdentityProviderIdRoute,
  getIdentityProvidersCountRoute,
  getIdentityProvidersIdentityProviderIdRoute,
  getIdentityProvidersRoute,
  patchIdentityProvidersIdentityProviderIdRoute,
  postIdentityProvidersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityProvidersIdentityProviderHandler = app
  .openapi(getIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityProvidersIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityProvidersIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityProvidersIdentityProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityProvidersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
