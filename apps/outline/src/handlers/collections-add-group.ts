import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsAddGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsAddGroupHandler = app.openapi(postCollectionsAddGroupRoute, (c) => {
  throw new Error('Not implemented')
})
