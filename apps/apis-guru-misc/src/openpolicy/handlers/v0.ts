import { OpenAPIHono } from '@hono/zod-openapi'
import { postV0DataPathRoute } from '../routes'

const app = new OpenAPIHono()

export const v0Handler = app.openapi(postV0DataPathRoute, (c) => {
  throw new Error('Not implemented')
})
