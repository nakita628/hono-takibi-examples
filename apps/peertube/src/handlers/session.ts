import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OauthClientsLocalRoute,
  getApiV1UsersIdTokenSessionsRoute,
  postApiV1UsersIdTokenSessionsTokenSessionIdRevokeRoute,
  postApiV1UsersRevokeTokenRoute,
  postApiV1UsersTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionHandler = app
  .openapi(getApiV1OauthClientsLocalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersRevokeTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersIdTokenSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersIdTokenSessionsTokenSessionIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
