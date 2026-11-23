import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsMoveRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsMoveHandler = app.openapi(postCollectionsMoveRoute, (c) => {
  throw new Error('Not implemented')
})
