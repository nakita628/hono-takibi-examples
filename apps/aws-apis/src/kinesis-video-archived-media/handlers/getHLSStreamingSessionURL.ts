import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetHLSStreamingSessionURLRoute } from '../routes'

const app = new OpenAPIHono()

export const getHLSStreamingSessionURLHandler = app.openapi(
  postGetHLSStreamingSessionURLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
