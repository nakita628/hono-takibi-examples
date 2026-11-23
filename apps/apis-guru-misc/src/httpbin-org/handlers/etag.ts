import { OpenAPIHono } from '@hono/zod-openapi'
import { getEtagEtagRoute } from '../routes'

const app = new OpenAPIHono()

export const etagHandler = app.openapi(getEtagEtagRoute, (c) => {
  throw new Error('Not implemented')
})
