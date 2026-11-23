import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsExportRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsExportHandler = app.openapi(postCollectionsExportRoute, (c) => {
  throw new Error('Not implemented')
})
