import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CartsMineCollectionPointSelectRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineCollectionPointSelectHandler = app.openapi(
  postV1CartsMineCollectionPointSelectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
