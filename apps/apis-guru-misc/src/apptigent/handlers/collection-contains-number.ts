import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionContainsNumberRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionContainsNumberHandler = app.openapi(
  postCollectionContainsNumberRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
