import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthAuthenticationsDeleteRoute, postOauthAuthenticationsListRoute } from '../routes'

const app = new OpenAPIHono()

export const oAuthAuthenticationsHandler = app
  .openapi(postOauthAuthenticationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthAuthenticationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
