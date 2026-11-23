import { OpenAPIHono } from '@hono/zod-openapi'
import { getHyponymsRoute } from '../routes'

const app = new OpenAPIHono()

export const hyponymsHandler = app.openapi(getHyponymsRoute, (c) => {
  throw new Error('Not implemented')
})
