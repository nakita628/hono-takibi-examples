import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuthIndieauthCallbackRoute,
  getAuthProviderIndieauthRoute,
  postAuthFediverseRoute,
  postAuthFediverseVerifyRoute,
  postAuthIndieauthRoute,
  postAuthProviderIndieauthRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postAuthIndieauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthIndieauthCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthProviderIndieauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthProviderIndieauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthFediverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthFediverseVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
