import { OpenAPIHono } from '@hono/zod-openapi'
import { postParseRoute } from '../routes'

const app = new OpenAPIHono()

export const parseHandler = app.openapi(postParseRoute, (c) => {
  throw new Error('Not implemented')
})
