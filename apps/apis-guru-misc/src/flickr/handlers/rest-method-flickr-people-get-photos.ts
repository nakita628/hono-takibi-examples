import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrPeopleGetPhotosRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrPeopleGetPhotosHandler = app.openapi(
  getRestMethodFlickrPeopleGetPhotosRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
