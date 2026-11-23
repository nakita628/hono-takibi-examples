import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const groupResourcesHandler = app.openapi(postGroupResourcesRoute, (c) => {
  throw new Error('Not implemented')
})
