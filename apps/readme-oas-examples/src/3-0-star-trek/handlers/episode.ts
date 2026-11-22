import { OpenAPIHono } from '@hono/zod-openapi'
import { getEpisodeRoute, getEpisodeSearchRoute, postEpisodeSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const episodeHandler = app
  .openapi(getEpisodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpisodeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEpisodeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
