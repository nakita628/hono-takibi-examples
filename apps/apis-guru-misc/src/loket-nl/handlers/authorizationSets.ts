import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersAuthorizationsetsAuthorizationsetidRoute,
  getProvidersProviderIdAuthorizationsetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authorizationSetsHandler = app
  .openapi(getProvidersAuthorizationsetsAuthorizationsetidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdAuthorizationsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
