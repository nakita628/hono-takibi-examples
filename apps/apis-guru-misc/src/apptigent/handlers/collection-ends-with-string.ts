import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionEndsWithStringRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionEndsWithStringHandler = app.openapi(
  postCollectionEndsWithStringRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
