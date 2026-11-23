import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsRemoveGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsRemoveGroupHandler = app.openapi(postCollectionsRemoveGroupRoute, (c) => {
  throw new Error('Not implemented')
})
