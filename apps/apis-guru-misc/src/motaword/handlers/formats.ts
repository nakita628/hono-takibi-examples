import { OpenAPIHono } from '@hono/zod-openapi'
import { getFormatsRoute } from '../routes'

const app = new OpenAPIHono()

export const formatsHandler = app.openapi(getFormatsRoute, (c) => {
  throw new Error('Not implemented')
})
