import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1p3beta1VideosAnnotateRoute } from '../routes'

const app = new OpenAPIHono()

export const videosHandler = app.openapi(postV1p3beta1VideosAnnotateRoute, (c) => {
  throw new Error('Not implemented')
})
