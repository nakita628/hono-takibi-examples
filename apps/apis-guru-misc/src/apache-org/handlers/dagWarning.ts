import { OpenAPIHono } from '@hono/zod-openapi'
import { getDagWarningsRoute } from '../routes'

const app = new OpenAPIHono()

export const dagWarningHandler = app.openapi(getDagWarningsRoute, (c) => {
  throw new Error('Not implemented')
})
