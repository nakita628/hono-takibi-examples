import { OpenAPIHono } from '@hono/zod-openapi'
import { getBasicFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app.openapi(getBasicFormatRoute, (c) => {
  throw new Error('Not implemented')
})
