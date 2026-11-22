import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3AccountsAccountIdFavoriteAssetsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const favoriteAssetsHandler = app.openapi(
  getApiV3AccountsAccountIdFavoriteAssetsIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
