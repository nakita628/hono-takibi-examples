import { OpenAPIHono } from '@hono/zod-openapi'
import { getArizePhoenixVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const arizePhoenixVersionHandler = app.openapi(getArizePhoenixVersionRoute, (c) => {
  throw new Error('Not implemented')
})
