import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrFavoritesGetListRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrFavoritesGetListHandler = app.openapi(
  getRestMethodFlickrFavoritesGetListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
