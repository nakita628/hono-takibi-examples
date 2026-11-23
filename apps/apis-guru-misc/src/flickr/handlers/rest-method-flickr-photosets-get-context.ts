import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrPhotosetsGetContextRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrPhotosetsGetContextHandler = app.openapi(
  getRestMethodFlickrPhotosetsGetContextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
