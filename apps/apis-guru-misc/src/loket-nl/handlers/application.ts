import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApplicationsApplicationIdAuthorizationsRoute,
  getApplicationsApplicationIdLogoRoute,
  getProvidersEmployersEmployerIdApplicationsApplicationIdUsersRoute,
  getProvidersEmployersEmployerIdApplicationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationHandler = app
  .openapi(getApplicationsApplicationIdAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdApplicationsApplicationIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
