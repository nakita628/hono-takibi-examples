import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTykOauthClientsApiIDKeyNameRoute,
  deleteTykOauthRefreshKeyNameRoute,
  deleteTykOauthTokensRoute,
  getTykOauthClientsApiIDKeyNameRoute,
  getTykOauthClientsApiIDKeyNameTokensRoute,
  getTykOauthClientsApiIDRoute,
  getTykOauthClientsApisAppIDRoute,
  postTykOauthClientsCreateRoute,
  postTykOauthRevokeAllRoute,
  postTykOauthRevokeRoute,
  putTykOauthClientsApiIDKeyNameRotateRoute,
  putTykOauthClientsApiIDKeyNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthHandler = app
  .openapi(getTykOauthClientsApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykOauthClientsApiIDKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykOauthClientsApiIDKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTykOauthClientsApiIDKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTykOauthClientsApiIDKeyNameRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykOauthClientsApiIDKeyNameTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykOauthClientsApisAppIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykOauthClientsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykOauthRefreshKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykOauthRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykOauthRevokeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykOauthTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
