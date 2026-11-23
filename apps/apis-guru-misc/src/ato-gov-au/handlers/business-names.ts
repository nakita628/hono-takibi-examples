import { OpenAPIHono } from '@hono/zod-openapi'
import { getBusinessNamesRoute } from '../routes'

const app = new OpenAPIHono()

export const businessNamesHandler = app.openapi(getBusinessNamesRoute, (c) => {
  throw new Error('Not implemented')
})
