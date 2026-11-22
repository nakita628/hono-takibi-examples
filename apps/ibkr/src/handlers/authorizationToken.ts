import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauth2ApiV1TokenRoute } from '../routes'

const app = new OpenAPIHono()

export const authorizationTokenHandler = app.openapi(postOauth2ApiV1TokenRoute, (c) => {
  throw new Error('Not implemented')
})
