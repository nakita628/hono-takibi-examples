import { OpenAPIHono } from '@hono/zod-openapi'
import { postNetworkUnblockRoute } from '../routes'

const app = new OpenAPIHono()

export const networkUnblockHandler = app.openapi(postNetworkUnblockRoute, (c) => {
  throw new Error('Not implemented')
})
