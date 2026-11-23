import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrPhotosSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrPhotosSearchHandler = app.openapi(
  getRestMethodFlickrPhotosSearchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
