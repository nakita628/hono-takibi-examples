import { OpenAPIHono } from '@hono/zod-openapi'
import { getAlbumsItemIdInstantMixRoute, getAlbumsItemIdSimilarRoute } from '../routes'

const app = new OpenAPIHono()

export const albumsHandler = app
  .openapi(getAlbumsItemIdInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlbumsItemIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
