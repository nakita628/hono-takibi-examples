import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPodcastEpisodesRoute } from '../routes'

const app = new OpenAPIHono()

export const podcastEpisodesHandler = app.openapi(getApiPodcastEpisodesRoute, (c) => {
  throw new Error('Not implemented')
})
