import { OpenAPIHono } from '@hono/zod-openapi'
import { postVideosVideoIdVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const videosVersionsHandler = app.openapi(postVideosVideoIdVersionsRoute, (c) => {
  throw new Error('Not implemented')
})
