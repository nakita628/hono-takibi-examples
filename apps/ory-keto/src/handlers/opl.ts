import { OpenAPIHono } from '@hono/zod-openapi'
import { postOplSyntaxCheckRoute } from '../routes'

const app = new OpenAPIHono()

export const oplHandler = app.openapi(postOplSyntaxCheckRoute, (c) => {
  throw new Error('Not implemented')
})
