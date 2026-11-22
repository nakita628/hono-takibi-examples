import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiIdentityProvidersIdentityProviderRoute,
  getApiIdentityProvidersIdentityProviderRoute,
  getApiIdentityProvidersRoute,
  patchApiIdentityProvidersIdentityProviderRoute,
  postApiIdentityProvidersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityProviderServiceHandler = app
  .openapi(getApiIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIdentityProvidersIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIdentityProvidersIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIdentityProvidersIdentityProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
