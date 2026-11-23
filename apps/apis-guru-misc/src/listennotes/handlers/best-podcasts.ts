import { OpenAPIHono } from '@hono/zod-openapi'
import { getBestPodcastsRoute } from '../routes'

const app = new OpenAPIHono()

export const bestPodcastsHandler = app.openapi(getBestPodcastsRoute, (c) => {
  throw new Error('Not implemented')
})
