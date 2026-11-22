import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateTableObjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const UpdateTableObjectsHandler = app.openapi(postUpdateTableObjectsRoute, (c) => {
  throw new Error('Not implemented')
})
