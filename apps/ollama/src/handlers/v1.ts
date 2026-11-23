import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1SystemoneRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app.openapi(postV1SystemoneRoute, (c) => {
  throw new Error('Not implemented')
})
