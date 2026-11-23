import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauth2ApiV1TokenRoute } from '../routes'

const app = new OpenAPIHono()

export const oauth2Handler = app.openapi(postOauth2ApiV1TokenRoute, (c) => {
  throw new Error('Not implemented')
})
