import { OpenAPIHono } from '@hono/zod-openapi'
import { getSumRoute } from '../routes'

const app = new OpenAPIHono()

export const sumHandler = app.openapi(getSumRoute, (c) => {
  throw new Error('Not implemented')
})
