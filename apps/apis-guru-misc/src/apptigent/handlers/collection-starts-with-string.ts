import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionStartsWithStringRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionStartsWithStringHandler = app.openapi(
  postCollectionStartsWithStringRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
