import { OpenAPIHono } from '@hono/zod-openapi'
import { getErrorCodesRoute } from '../routes'

const app = new OpenAPIHono()

export const errorCodesHandler = app.openapi(getErrorCodesRoute, (c) => {
  throw new Error('Not implemented')
})
