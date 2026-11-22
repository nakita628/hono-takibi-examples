import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CompileRoute } from '../routes'

const app = new OpenAPIHono()

export const compileAPIHandler = app.openapi(postV1CompileRoute, (c) => {
  throw new Error('Not implemented')
})
