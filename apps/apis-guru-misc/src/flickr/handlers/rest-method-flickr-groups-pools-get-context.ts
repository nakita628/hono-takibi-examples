import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrGroupsPoolsGetContextRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrGroupsPoolsGetContextHandler = app.openapi(
  getRestMethodFlickrGroupsPoolsGetContextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
