import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2OauthClientsClientIdRoute,
  getApiV2OauthClientsClientIdRoute,
  getApiV2OauthClientsRoute,
  patchApiV2OauthClientsClientIdRoute,
  postApiV2OauthClientsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuth2ClientsHandler = app
  .openapi(getApiV2OauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2OauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
