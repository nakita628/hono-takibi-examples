import { OpenAPIHono } from '@hono/zod-openapi'
import { getEodRoute } from '../routes'

const app = new OpenAPIHono()

export const eodHandler = app.openapi(getEodRoute, (c) => {
  throw new Error('Not implemented')
})
