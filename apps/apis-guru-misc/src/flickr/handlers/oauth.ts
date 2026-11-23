import { OpenAPIHono } from '@hono/zod-openapi'
import { getOauthAccessTokenRoute, getOauthRequestTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(getOauthAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthRequestTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
