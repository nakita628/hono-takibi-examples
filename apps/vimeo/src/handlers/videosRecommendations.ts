import { OpenAPIHono } from '@hono/zod-openapi'
import { getVideosVideoIdVideosRoute } from '../routes'

const app = new OpenAPIHono()

export const videosRecommendationsHandler = app.openapi(getVideosVideoIdVideosRoute, (c) => {
  throw new Error('Not implemented')
})
