import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuthenticationMethodsPolicyRoute,
  patchAuthenticationMethodsPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationMethodsPolicyAuthenticationMethodsPolicyHandler = app
  .openapi(getAuthenticationMethodsPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticationMethodsPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
