import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsDocumentsRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsDocumentsHandler = app.openapi(postCollectionsDocumentsRoute, (c) => {
  throw new Error('Not implemented')
})
