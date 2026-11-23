import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsCreateHandler = app.openapi(postCollectionsCreateRoute, (c) => {
  throw new Error('Not implemented')
})
