import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1B2bSessionsJwksProjectIdRoute,
  getV1B2bSessionsRoute,
  getV1SessionsJwksProjectIdRoute,
  getV1SessionsRoute,
  postV1B2bSessionsAttestRoute,
  postV1B2bSessionsAuthenticateRoute,
  postV1B2bSessionsExchangeAccessTokenRoute,
  postV1B2bSessionsExchangeRoute,
  postV1B2bSessionsMigrateRoute,
  postV1B2bSessionsRevokeRoute,
  postV1SessionsAttestRoute,
  postV1SessionsAuthenticateRoute,
  postV1SessionsExchangeAccessTokenRoute,
  postV1SessionsMigrateRoute,
  postV1SessionsRevokeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionHandler = app
  .openapi(getV1SessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionsAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionsRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionsMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionsExchangeAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SessionsJwksProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionsAttestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSessionsAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSessionsRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSessionsExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSessionsExchangeAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSessionsAttestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bSessionsMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bSessionsJwksProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
