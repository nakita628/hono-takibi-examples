import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsUpdateHandler = app.openapi(postCollectionsUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
