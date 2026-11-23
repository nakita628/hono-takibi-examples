import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteOauthGrantsOauthGrantIdRoute, getOauthGrantsRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(getOauthGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOauthGrantsOauthGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
