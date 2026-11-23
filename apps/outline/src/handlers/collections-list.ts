import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsListRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsListHandler = app.openapi(postCollectionsListRoute, (c) => {
  throw new Error('Not implemented')
})
