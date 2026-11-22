import { OpenAPIHono } from '@hono/zod-openapi'
import { getSqlV1beta4FlagsRoute } from '../routes'

const app = new OpenAPIHono()

export const flagsHandler = app.openapi(getSqlV1beta4FlagsRoute, (c) => {
  throw new Error('Not implemented')
})
