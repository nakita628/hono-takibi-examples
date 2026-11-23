import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteMediaMediaIdRoute, getMediaMediaIdRoute, postMediaRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app
  .openapi(postMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMediaMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMediaMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
