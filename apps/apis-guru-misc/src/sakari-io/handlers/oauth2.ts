import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauth2TokenRoute } from '../routes'

const app = new OpenAPIHono()

export const oauth2Handler = app.openapi(postOauth2TokenRoute, (c) => {
  throw new Error('Not implemented')
})
