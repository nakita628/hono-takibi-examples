import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAuthnK8sServiceIdAccountLoginAuthenticateRoute,
  postAuthnK8sServiceIdInjectClientCertRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authnK8sHandler = app
  .openapi(postAuthnK8sServiceIdInjectClientCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthnK8sServiceIdAccountLoginAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
