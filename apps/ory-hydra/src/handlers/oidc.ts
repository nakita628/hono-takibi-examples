import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOauth2RegisterIdRoute,
  getOauth2RegisterIdRoute,
  getOauth2SessionsLogoutRoute,
  getUserinfoRoute,
  getWellKnownOpenidConfigurationRoute,
  postCredentialsRoute,
  postOauth2RegisterRoute,
  putOauth2RegisterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oidcHandler = app
  .openapi(getWellKnownOpenidConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2RegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOauth2RegisterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2RegisterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOauth2RegisterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2SessionsLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
