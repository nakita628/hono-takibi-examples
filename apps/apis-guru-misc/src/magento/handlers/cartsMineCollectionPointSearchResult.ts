import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsMineCollectionPointSearchResultRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineCollectionPointSearchResultHandler = app.openapi(
  getV1CartsMineCollectionPointSearchResultRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
