import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOauthClientsCreateRoute,
  postOauthClientsDeleteRoute,
  postOauthClientsInfoRoute,
  postOauthClientsListRoute,
  postOauthClientsRotateSecretRoute,
  postOauthClientsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthClientsHandler = app
  .openapi(postOauthClientsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthClientsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthClientsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthClientsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthClientsRotateSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthClientsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
