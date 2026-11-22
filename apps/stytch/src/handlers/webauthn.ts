import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WebauthnCredentialsUserIdDomainRoute,
  postV1WebauthnAuthenticateRoute,
  postV1WebauthnAuthenticateStartRoute,
  postV1WebauthnRegisterRoute,
  postV1WebauthnRegisterStartRoute,
  putV1WebauthnWebauthnRegistrationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webauthnHandler = app
  .openapi(postV1WebauthnRegisterStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebauthnRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebauthnAuthenticateStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebauthnAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WebauthnWebauthnRegistrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebauthnCredentialsUserIdDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
