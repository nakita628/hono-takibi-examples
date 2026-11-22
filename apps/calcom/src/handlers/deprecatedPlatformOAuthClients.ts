import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2OauthClientsClientIdRoute,
  getV2OauthClientsClientIdRoute,
  getV2OauthClientsRoute,
  patchV2OauthClientsClientIdRoute,
  postV2OauthClientsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deprecatedPlatformOAuthClientsHandler = app
  .openapi(postV2OauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2OauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2OauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
