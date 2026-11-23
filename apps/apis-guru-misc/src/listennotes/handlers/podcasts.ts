import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePodcastsIdRoute,
  getPodcastsIdAudienceRoute,
  getPodcastsIdRecommendationsRoute,
  getPodcastsIdRoute,
  postPodcastsRoute,
  postPodcastsSubmitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const podcastsHandler = app
  .openapi(postPodcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPodcastsSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePodcastsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPodcastsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPodcastsIdAudienceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPodcastsIdRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
