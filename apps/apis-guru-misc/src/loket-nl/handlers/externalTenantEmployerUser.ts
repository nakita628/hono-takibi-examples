import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersUsersEmployerUserIdConfiguredexternaltenantRoute,
  patchProvidersEmployersUsersEmployerUserIdConfiguredexternaltenantRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalTenantEmployerUserHandler = app
  .openapi(getProvidersEmployersUsersEmployerUserIdConfiguredexternaltenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersUsersEmployerUserIdConfiguredexternaltenantRoute, (c) => {
    throw new Error('Not implemented')
  })
