import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauthGetConnectClientRoute,
  getOauthListConnectsRoute,
  getOauthListLoginsRoute,
  postOauthConnectCallbackClientNameRoute,
  postOauthConnectSlackCallbackRoute,
  postOauthConnectSlackInstanceRoute,
  postOauthLoginCallbackClientNameRoute,
  postOauthTestClientCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(postOauthLoginCallbackClientNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthConnectSlackCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthConnectSlackInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthConnectCallbackClientNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthListLoginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthListConnectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthGetConnectClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthTestClientCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
