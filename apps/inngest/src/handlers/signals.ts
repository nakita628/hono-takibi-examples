import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1SignalsRoute } from '../routes'

const app = new OpenAPIHono()

export const signalsHandler = app.openapi(postV1SignalsRoute, (c) => {
  throw new Error('Not implemented')
})
