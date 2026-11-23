import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionsRemoveUserRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsRemoveUserHandler = app.openapi(postCollectionsRemoveUserRoute, (c) => {
  throw new Error('Not implemented')
})
