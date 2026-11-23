import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsDuplicateRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsDuplicateHandler = app.openapi(postCollectionsDuplicateRoute, (c) => {
  throw new Error('Not implemented')
})
