import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauthGetConnectClientRoute,
  getOauthListConnectsRoute,
  getOauthListLoginsRoute,
  postOauthConnectCallbackClientNameRoute,
  postOauthConnectSlackCallbackRoute,
  postOauthConnectSlackInstanceRoute,
  postOauthTestClientCredentialsRoute,
  postWWorkspaceOauthConnectClientCredentialsClientRoute,
  postWWorkspaceOauthConnectSlackCallbackRoute,
  postWWorkspaceOauthCreateAccountRoute,
  postWWorkspaceOauthDisconnectIdRoute,
  postWWorkspaceOauthDisconnectSlackRoute,
  postWWorkspaceOauthDisconnectTeamsRoute,
  postWWorkspaceOauthRefreshTokenIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(postWWorkspaceOauthConnectSlackCallbackRoute, (c) => {
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
  .openapi(postWWorkspaceOauthCreateAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOauthConnectClientCredentialsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOauthRefreshTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOauthDisconnectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOauthDisconnectSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOauthDisconnectTeamsRoute, (c) => {
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
