import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CartsMineCollectionPointSearchRequestRoute,
  putV1CartsMineCollectionPointSearchRequestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cartsMineCollectionPointSearchRequestHandler = app
  .openapi(deleteV1CartsMineCollectionPointSearchRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsMineCollectionPointSearchRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
