import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1TokensEphemeralRoute } from '../routes'

const app = new OpenAPIHono()

export const tokensHandler = app.openapi(postV1TokensEphemeralRoute, (c) => {
  throw new Error('Not implemented')
})
