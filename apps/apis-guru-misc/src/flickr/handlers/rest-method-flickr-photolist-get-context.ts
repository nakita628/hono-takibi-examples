import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrPhotolistGetContextRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrPhotolistGetContextHandler = app.openapi(
  getRestMethodFlickrPhotolistGetContextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
