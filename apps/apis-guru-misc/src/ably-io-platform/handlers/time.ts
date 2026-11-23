import { OpenAPIHono } from '@hono/zod-openapi'
import { getTimeRoute } from '../routes'

const app = new OpenAPIHono()

export const timeHandler = app.openapi(getTimeRoute, (c) => {
  throw new Error('Not implemented')
})
