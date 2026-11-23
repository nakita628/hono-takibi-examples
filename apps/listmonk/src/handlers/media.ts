import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteMediaIdRoute, getMediaIdRoute, getMediaRoute, postMediaRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app
  .openapi(getMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
