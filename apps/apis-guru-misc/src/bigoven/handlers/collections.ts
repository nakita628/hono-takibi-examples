import { OpenAPIHono } from '@hono/zod-openapi'
import { getCollectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app.openapi(getCollectionsRoute, (c) => {
  throw new Error('Not implemented')
})
