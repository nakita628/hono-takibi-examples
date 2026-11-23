import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrPhotosetsGetListRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrPhotosetsGetListHandler = app.openapi(
  getRestMethodFlickrPhotosetsGetListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
