import { OpenAPIHono } from '@hono/zod-openapi'
import { postWWorkspaceFavoritesStarRoute, postWWorkspaceFavoritesUnstarRoute } from '../routes'

const app = new OpenAPIHono()

export const favoriteHandler = app
  .openapi(postWWorkspaceFavoritesStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFavoritesUnstarRoute, (c) => {
    throw new Error('Not implemented')
  })
