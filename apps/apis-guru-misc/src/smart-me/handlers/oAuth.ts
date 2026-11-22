import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiOauthAuthorizeRoute, postApiOauthAuthorizeRoute } from '../routes'

const app = new OpenAPIHono()

export const oAuthHandler = app
  .openapi(getApiOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
