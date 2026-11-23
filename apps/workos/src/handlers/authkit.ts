import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthkitOauth2CompleteRoute } from '../routes'

const app = new OpenAPIHono()

export const authkitHandler = app.openapi(postAuthkitOauth2CompleteRoute, (c) => {
  throw new Error('Not implemented')
})
