import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsRestoreRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsRestoreHandler = app.openapi(postCollectionsRestoreRoute, (c) => {
  throw new Error('Not implemented')
})
