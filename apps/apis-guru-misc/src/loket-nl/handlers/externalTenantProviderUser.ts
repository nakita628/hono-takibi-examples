import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersUsersProviderUserIdConfiguredexternaltenantRoute,
  patchProvidersUsersProviderUserIdConfiguredexternaltenantRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalTenantProviderUserHandler = app
  .openapi(getProvidersUsersProviderUserIdConfiguredexternaltenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersUsersProviderUserIdConfiguredexternaltenantRoute, (c) => {
    throw new Error('Not implemented')
  })
