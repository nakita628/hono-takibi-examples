import { OpenAPIHono } from '@hono/zod-openapi'
import { postPortabilityChecksRoute } from '../routes'

const app = new OpenAPIHono()

export const phoneNumberPortingHandler = app.openapi(postPortabilityChecksRoute, (c) => {
  throw new Error('Not implemented')
})
