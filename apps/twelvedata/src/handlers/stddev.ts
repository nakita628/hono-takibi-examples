import { OpenAPIHono } from '@hono/zod-openapi'
import { getStddevRoute } from '../routes'

const app = new OpenAPIHono()

export const stddevHandler = app.openapi(getStddevRoute, (c) => {
  throw new Error('Not implemented')
})
