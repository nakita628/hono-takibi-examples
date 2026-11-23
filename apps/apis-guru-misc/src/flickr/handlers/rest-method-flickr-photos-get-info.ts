import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrPhotosGetInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrPhotosGetInfoHandler = app.openapi(
  getRestMethodFlickrPhotosGetInfoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
