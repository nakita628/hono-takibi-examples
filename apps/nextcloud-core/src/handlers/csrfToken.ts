import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexPhpCsrftokenRoute } from '../routes'

const app = new OpenAPIHono()

export const csrfTokenHandler = app.openapi(getIndexPhpCsrftokenRoute, (c) => {
  throw new Error('Not implemented')
})
