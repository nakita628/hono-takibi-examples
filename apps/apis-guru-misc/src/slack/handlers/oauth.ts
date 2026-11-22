import { OpenAPIHono } from '@hono/zod-openapi'
import { getOauthAccessRoute, getOauthTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(getOauthAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
