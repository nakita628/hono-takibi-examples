import { OpenAPIHono } from '@hono/zod-openapi'
import { postCodeExecuteRoute } from '../routes'

const app = new OpenAPIHono()

export const codeHandler = app.openapi(postCodeExecuteRoute, (c) => {
  throw new Error('Not implemented')
})
