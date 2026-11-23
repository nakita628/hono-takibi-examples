import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrGroupsDiscussTopicsGetInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrGroupsDiscussTopicsGetInfoHandler = app.openapi(
  getRestMethodFlickrGroupsDiscussTopicsGetInfoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
