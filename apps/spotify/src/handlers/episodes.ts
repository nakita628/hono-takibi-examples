import { OpenAPIHono } from '@hono/zod-openapi'
import { getEpisodesIdRoute, getEpisodesRoute } from '../routes'

const app = new OpenAPIHono()

export const episodesHandler = app
  .openapi(getEpisodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
