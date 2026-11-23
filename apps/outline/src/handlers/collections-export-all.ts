import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsExportAllRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsExportAllHandler = app.openapi(postCollectionsExportAllRoute, (c) => {
  throw new Error('Not implemented')
})
