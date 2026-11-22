import { OpenAPIHono } from '@hono/zod-openapi'
import { postCheckCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const checkCodeHandler = app.openapi(postCheckCodeRoute, (c) => {
  throw new Error('Not implemented')
})
