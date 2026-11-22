import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2OauthAuthorizeRoute, postV2OauthAccessTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(postV2OauthAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
