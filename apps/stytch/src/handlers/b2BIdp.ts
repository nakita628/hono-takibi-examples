import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1B2bIdpOauthAuthorizeRoute, postV1B2bIdpOauthAuthorizeStartRoute } from '../routes'

const app = new OpenAPIHono()

export const b2BIdpHandler = app
  .openapi(postV1B2bIdpOauthAuthorizeStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bIdpOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
