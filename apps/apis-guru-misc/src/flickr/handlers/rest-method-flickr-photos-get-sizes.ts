import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrPhotosGetSizesRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrPhotosGetSizesHandler = app.openapi(
  getRestMethodFlickrPhotosGetSizesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
