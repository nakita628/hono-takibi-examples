import { OpenAPIHono } from '@hono/zod-openapi'
import { getVideosVideoIdMediaSourceIdAttachmentsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const videoAttachmentsHandler = app.openapi(
  getVideosVideoIdMediaSourceIdAttachmentsIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
