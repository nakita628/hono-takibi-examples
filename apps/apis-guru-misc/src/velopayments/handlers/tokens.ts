import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2UsersUserIdTokensRoute } from '../routes'

const app = new OpenAPIHono()

export const tokensHandler = app.openapi(postV2UsersUserIdTokensRoute, (c) => {
  throw new Error('Not implemented')
})
