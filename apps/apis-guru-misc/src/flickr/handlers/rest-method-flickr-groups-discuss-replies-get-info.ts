import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrGroupsDiscussRepliesGetInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrGroupsDiscussRepliesGetInfoHandler = app.openapi(
  getRestMethodFlickrGroupsDiscussRepliesGetInfoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
