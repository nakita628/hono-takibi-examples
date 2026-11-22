import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1OauthAttachRoute, postV1OauthAuthenticateRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(postV1OauthAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OauthAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
