import { OpenAPIHono } from '@hono/zod-openapi'
import { getEpisodesIdRecommendationsRoute, getEpisodesIdRoute, postEpisodesRoute } from '../routes'

const app = new OpenAPIHono()

export const episodesHandler = app
  .openapi(postEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpisodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpisodesIdRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
