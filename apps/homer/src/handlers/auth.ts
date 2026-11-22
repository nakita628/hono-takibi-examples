import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthSessionsSessionIdRoute,
  getAuthOauth2ProviderCallbackRoute,
  getAuthOauth2ProviderRedirectRoute,
  getAuthProvidersRoute,
  postAuthOauth2TokenRoute,
  postAuthSessionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postAuthSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthOauth2ProviderRedirectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthOauth2ProviderCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthOauth2TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
