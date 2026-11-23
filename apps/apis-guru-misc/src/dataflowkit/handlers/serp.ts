import { OpenAPIHono } from '@hono/zod-openapi'
import { postSerpRoute } from '../routes'

const app = new OpenAPIHono()

export const serpHandler = app.openapi(postSerpRoute, (c) => {
  throw new Error('Not implemented')
})
