import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsAddUserRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsAddUserHandler = app.openapi(postCollectionsAddUserRoute, (c) => {
  throw new Error('Not implemented')
})
