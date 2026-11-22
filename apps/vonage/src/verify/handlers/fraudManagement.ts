import { OpenAPIHono } from '@hono/zod-openapi'
import { postNetworkUnblockRoute } from '../routes'

const app = new OpenAPIHono()

export const fraudManagementHandler = app.openapi(postNetworkUnblockRoute, (c) => {
  throw new Error('Not implemented')
})
