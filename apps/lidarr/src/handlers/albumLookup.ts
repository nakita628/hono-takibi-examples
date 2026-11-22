import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1AlbumLookupRoute } from '../routes'

const app = new OpenAPIHono()

export const albumLookupHandler = app.openapi(getApiV1AlbumLookupRoute, (c) => {
  throw new Error('Not implemented')
})
