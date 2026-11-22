import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2IdentityProvidersIdpIdUsersRoute,
  getApiV2IdentityProvidersRoute,
  patchApiV2IdentityProvidersIdpIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityProvidersHandler = app
  .openapi(getApiV2IdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IdentityProvidersIdpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IdentityProvidersIdpIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
