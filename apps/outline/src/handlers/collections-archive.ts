import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsArchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsArchiveHandler = app.openapi(postCollectionsArchiveRoute, (c) => {
  throw new Error('Not implemented')
})
