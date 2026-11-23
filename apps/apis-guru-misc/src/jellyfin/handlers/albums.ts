import { OpenAPIHono } from '@hono/zod-openapi'
import { getAlbumsIdInstantMixRoute, getAlbumsItemIdSimilarRoute } from '../routes'

const app = new OpenAPIHono()

export const albumsHandler = app
  .openapi(getAlbumsIdInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlbumsItemIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
