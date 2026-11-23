import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrFavoritesGetContextRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrFavoritesGetContextHandler = app.openapi(
  getRestMethodFlickrFavoritesGetContextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
