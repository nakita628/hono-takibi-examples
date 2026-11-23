import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrPhotosGetExifRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrPhotosGetExifHandler = app.openapi(
  getRestMethodFlickrPhotosGetExifRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
