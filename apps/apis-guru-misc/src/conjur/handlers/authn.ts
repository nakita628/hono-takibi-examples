import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuthnAccountLoginRoute,
  postAuthnAccountLoginAuthenticateRoute,
  putAuthnAccountApiKeyRoute,
  putAuthnAccountPasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authnHandler = app
  .openapi(putAuthnAccountApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthnAccountLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthnAccountPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthnAccountLoginAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
