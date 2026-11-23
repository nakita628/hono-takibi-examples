import { OpenAPIHono } from '@hono/zod-openapi'
import { postListprincipalsRoute } from '../routes'

const app = new OpenAPIHono()

export const listprincipalsHandler = app.openapi(postListprincipalsRoute, (c) => {
  throw new Error('Not implemented')
})
