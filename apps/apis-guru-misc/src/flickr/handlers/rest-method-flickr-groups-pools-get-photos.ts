import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrGroupsPoolsGetPhotosRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrGroupsPoolsGetPhotosHandler = app.openapi(
  getRestMethodFlickrGroupsPoolsGetPhotosRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
