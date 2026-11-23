import { OpenAPIHono } from '@hono/zod-openapi'
import { getOauthConnectionsOauthConnectionIdRoute, getOauthConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthConnectionsHandler = app
  .openapi(getOauthConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthConnectionsOauthConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
