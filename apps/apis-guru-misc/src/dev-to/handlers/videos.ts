import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVideosRoute } from '../routes'

const app = new OpenAPIHono()

export const videosHandler = app.openapi(getApiVideosRoute, (c) => {
  throw new Error('Not implemented')
})
