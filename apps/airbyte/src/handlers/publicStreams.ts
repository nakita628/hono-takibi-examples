import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicV1StreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const publicStreamsHandler = app.openapi(getPublicV1StreamsRoute, (c) => {
  throw new Error('Not implemented')
})
