import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrPhotosGetContextRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrPhotosGetContextHandler = app.openapi(
  getRestMethodFlickrPhotosGetContextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
