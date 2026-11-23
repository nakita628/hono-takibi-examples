import { OpenAPIHono } from '@hono/zod-openapi'
import { postPersonalityRoute } from '../routes'

const app = new OpenAPIHono()

export const personalityHandler = app.openapi(postPersonalityRoute, (c) => {
  throw new Error('Not implemented')
})
