import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionContainsStringRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionContainsStringHandler = app.openapi(
  postCollectionContainsStringRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
