import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrGroupsDiscussTopicsGetListRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrGroupsDiscussTopicsGetListHandler = app.openapi(
  getRestMethodFlickrGroupsDiscussTopicsGetListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
