import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrGalleriesGetPhotosRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrGalleriesGetPhotosHandler = app.openapi(
  getRestMethodFlickrGalleriesGetPhotosRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
