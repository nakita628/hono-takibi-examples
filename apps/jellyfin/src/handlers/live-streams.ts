import { OpenAPIHono } from '@hono/zod-openapi'
import { postLiveStreamsCloseRoute, postLiveStreamsOpenRoute } from '../routes'

const app = new OpenAPIHono()

export const liveStreamsHandler = app
  .openapi(postLiveStreamsCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveStreamsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
