import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsImportRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsImportHandler = app.openapi(postCollectionsImportRoute, (c) => {
  throw new Error('Not implemented')
})
