import { OpenAPIHono } from '@hono/zod-openapi'
import { postCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const credentialsHandler = app.openapi(postCredentialsRoute, (c) => {
  throw new Error('Not implemented')
})
