import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2AuthenticationIsAliveRoute,
  postApiV2AuthenticationRequestPasswordResetRoute,
  postApiV2AuthenticationResetPaswordRoute,
  postApiV2AuthenticationRoute,
  putApiV2AuthenticatedUsersUserIDTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(putApiV2AuthenticatedUsersUserIDTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthenticationIsAliveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthenticationRequestPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthenticationResetPaswordRoute, (c) => {
    throw new Error('Not implemented')
  })
