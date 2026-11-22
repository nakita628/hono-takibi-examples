import { OpenAPIHono } from '@hono/zod-openapi'
import { getMediaMediaIdRoute, getMediaRoute, postMediaRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app
  .openapi(getMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMediaMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
