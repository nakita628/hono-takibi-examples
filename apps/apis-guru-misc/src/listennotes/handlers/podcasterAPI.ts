import { OpenAPIHono } from '@hono/zod-openapi'
import { deletePodcastsIdRoute, postPodcastsSubmitRoute } from '../routes'

const app = new OpenAPIHono()

export const podcasterAPIHandler = app
  .openapi(postPodcastsSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePodcastsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
