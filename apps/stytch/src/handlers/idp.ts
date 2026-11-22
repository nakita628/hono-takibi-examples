import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1IdpOauthAuthorizeRoute, postV1IdpOauthAuthorizeStartRoute } from '../routes'

const app = new OpenAPIHono()

export const idpHandler = app
  .openapi(postV1IdpOauthAuthorizeStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IdpOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
