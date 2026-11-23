import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAuthnJwtServiceIdAccountAuthenticateRoute,
  postAuthnJwtServiceIdAccountIdAuthenticateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authnJwtHandler = app
  .openapi(postAuthnJwtServiceIdAccountAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthnJwtServiceIdAccountIdAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
