import { OpenAPIHono } from '@hono/zod-openapi'
import { getCuratedPodcastsIdRoute, getCuratedPodcastsRoute } from '../routes'

const app = new OpenAPIHono()

export const curatedPodcastsHandler = app
  .openapi(getCuratedPodcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCuratedPodcastsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
