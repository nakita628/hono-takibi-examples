import { OpenAPIHono } from '@hono/zod-openapi'
import { postSignInTokensRoute, postSignInTokensSignInTokenIdRevokeRoute } from '../routes'

const app = new OpenAPIHono()

export const signInTokensHandler = app
  .openapi(postSignInTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignInTokensSignInTokenIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
