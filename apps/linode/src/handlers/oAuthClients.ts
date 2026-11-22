import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionAccountOauthClientsClientIdRoute,
  getApiVersionAccountOauthClientsClientIdRoute,
  getApiVersionAccountOauthClientsRoute,
  postApiVersionAccountOauthClientsClientIdResetSecretRoute,
  postApiVersionAccountOauthClientsRoute,
  putApiVersionAccountOauthClientsClientIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthClientsHandler = app
  .openapi(postApiVersionAccountOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionAccountOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionAccountOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountOauthClientsClientIdResetSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
