import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetDASHStreamingSessionURLRoute } from '../routes'

const app = new OpenAPIHono()

export const getDashStreamingSessionUrlHandler = app.openapi(
  postGetDASHStreamingSessionURLRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
