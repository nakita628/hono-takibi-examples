import { OpenAPIHono } from '@hono/zod-openapi'
import { postTrackRoute } from '../routes'

const app = new OpenAPIHono()

export const trackHandler = app.openapi(postTrackRoute, (c) => {
  throw new Error('Not implemented')
})
