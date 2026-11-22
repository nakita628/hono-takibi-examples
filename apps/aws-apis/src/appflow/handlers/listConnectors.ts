import { OpenAPIHono } from '@hono/zod-openapi'
import { postListConnectorsRoute } from '../routes'

const app = new OpenAPIHono()

export const listConnectorsHandler = app.openapi(postListConnectorsRoute, (c) => {
  throw new Error('Not implemented')
})
