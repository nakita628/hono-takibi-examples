import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1OauthClientsClientIdRoute,
  postV1OauthAuthorizeRoute,
  postV1OauthTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthHandler = app
  .openapi(postV1OauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
