import { OpenAPIHono } from '@hono/zod-openapi'
import { getPodcastsIdAudienceRoute } from '../routes'

const app = new OpenAPIHono()

export const insightsAPIHandler = app.openapi(getPodcastsIdAudienceRoute, (c) => {
  throw new Error('Not implemented')
})
