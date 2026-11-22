import { OpenAPIHono } from '@hono/zod-openapi'
import { postStopStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const StopStreamHandler = app.openapi(postStopStreamRoute, (c) => {
  throw new Error('Not implemented')
})
