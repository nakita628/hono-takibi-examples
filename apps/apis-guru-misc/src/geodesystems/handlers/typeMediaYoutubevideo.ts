import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeMediaYoutubevideoRoute } from '../routes'

const app = new OpenAPIHono()

export const typeMediaYoutubevideoHandler = app.openapi(
  getRepositorySearchTypeMediaYoutubevideoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
