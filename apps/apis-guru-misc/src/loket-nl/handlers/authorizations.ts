import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdAuthorizationsRoute,
  getProvidersProviderIdAuthorizationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authorizationsHandler = app
  .openapi(getProvidersEmployersEmployerIdAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
