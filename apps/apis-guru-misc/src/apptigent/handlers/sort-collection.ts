import { OpenAPIHono } from '@hono/zod-openapi'
import { postSortCollectionRoute } from '../routes'

const app = new OpenAPIHono()

export const sortCollectionHandler = app.openapi(postSortCollectionRoute, (c) => {
  throw new Error('Not implemented')
})
