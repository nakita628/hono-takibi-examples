import { OpenAPIHono } from '@hono/zod-openapi'
import { postMultiSynthesisRoute } from '../routes'

const app = new OpenAPIHono()

export const multiSynthesisHandler = app.openapi(postMultiSynthesisRoute, (c) => {
  throw new Error('Not implemented')
})
