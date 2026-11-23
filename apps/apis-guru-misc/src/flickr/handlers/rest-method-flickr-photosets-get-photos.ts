import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrPhotosetsGetPhotosRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrPhotosetsGetPhotosHandler = app.openapi(
  getRestMethodFlickrPhotosetsGetPhotosRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
