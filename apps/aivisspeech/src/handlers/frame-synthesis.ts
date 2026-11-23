import { OpenAPIHono } from '@hono/zod-openapi'
import { postFrameSynthesisRoute } from '../routes'

const app = new OpenAPIHono()

export const frameSynthesisHandler = app.openapi(postFrameSynthesisRoute, (c) => {
  throw new Error('Not implemented')
})
