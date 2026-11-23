import { OpenAPIHono } from '@hono/zod-openapi'
import { getCodeCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const codeHandler = app.openapi(getCodeCodeRoute, (c) => {
  throw new Error('Not implemented')
})
