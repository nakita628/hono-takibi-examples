import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdUsersUserIdAuthorizationsRoute,
  patchProvidersEmployersEmployerIdUsersUserIdAuthorizationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employerUserAuthorizationsHandler = app
  .openapi(getProvidersEmployersEmployerIdUsersUserIdAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersEmployerIdUsersUserIdAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
