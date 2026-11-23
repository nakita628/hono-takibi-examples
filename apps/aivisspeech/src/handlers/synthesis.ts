import { OpenAPIHono } from '@hono/zod-openapi'
import { postSynthesisRoute } from '../routes'

const app = new OpenAPIHono()

export const synthesisHandler = app.openapi(postSynthesisRoute, (c) => {
  throw new Error('Not implemented')
})
