import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteVideosRoute, getVideosRoute } from '../routes'

const app = new OpenAPIHono()

export const videosHandler = app
  .openapi(getVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
