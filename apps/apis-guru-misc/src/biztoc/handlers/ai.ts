import { OpenAPIHono } from '@hono/zod-openapi'
import { getAiNewsRoute } from '../routes'

const app = new OpenAPIHono()

export const aiHandler = app.openapi(getAiNewsRoute, (c) => {
  throw new Error('Not implemented')
})
