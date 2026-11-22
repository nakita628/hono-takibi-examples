import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ArtistLookupRoute } from '../routes'

const app = new OpenAPIHono()

export const artistLookupHandler = app.openapi(getApiV1ArtistLookupRoute, (c) => {
  throw new Error('Not implemented')
})
