import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuthnLdapServiceIdAccountLoginRoute,
  postAuthnLdapServiceIdAccountLoginAuthenticateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authnLdapHandler = app
  .openapi(getAuthnLdapServiceIdAccountLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthnLdapServiceIdAccountLoginAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
