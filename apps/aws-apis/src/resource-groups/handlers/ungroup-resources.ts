import { OpenAPIHono } from '@hono/zod-openapi'
import { postUngroupResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const ungroupResourcesHandler = app.openapi(postUngroupResourcesRoute, (c) => {
  throw new Error('Not implemented')
})
