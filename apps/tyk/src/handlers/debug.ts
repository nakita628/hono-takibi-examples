import { OpenAPIHono } from '@hono/zod-openapi'
import { postTykDebugRoute } from '../routes'

const app = new OpenAPIHono()

export const debugHandler = app.openapi(postTykDebugRoute, (c) => {
  throw new Error('Not implemented')
})
