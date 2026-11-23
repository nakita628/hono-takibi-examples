import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrPeopleGetInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrPeopleGetInfoHandler = app.openapi(
  getRestMethodFlickrPeopleGetInfoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
