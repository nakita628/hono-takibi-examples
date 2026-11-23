import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsDeleteHandler = app.openapi(postCollectionsDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
