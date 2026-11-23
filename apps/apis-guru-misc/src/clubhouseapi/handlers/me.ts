import { OpenAPIHono } from '@hono/zod-openapi'
import { postMeRoute } from '../routes'

const app = new OpenAPIHono()

export const meHandler = app.openapi(postMeRoute, (c) => {
  throw new Error('Not implemented')
})
