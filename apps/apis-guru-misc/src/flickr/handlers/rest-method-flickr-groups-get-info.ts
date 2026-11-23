import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrGroupsGetInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrGroupsGetInfoHandler = app.openapi(
  getRestMethodFlickrGroupsGetInfoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
