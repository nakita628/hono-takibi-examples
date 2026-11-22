import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdFavoriteTemplatesRoute,
  getV21AccountsAccountIdFavoriteTemplatesRoute,
  putV21AccountsAccountIdFavoriteTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const favoriteTemplatesHandler = app
  .openapi(deleteV21AccountsAccountIdFavoriteTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdFavoriteTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdFavoriteTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
