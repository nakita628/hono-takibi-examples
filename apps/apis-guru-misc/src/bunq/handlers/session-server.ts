import { OpenAPIHono } from '@hono/zod-openapi'
import { postSessionServerRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionServerHandler = app.openapi(postSessionServerRoute, (c) => {
  throw new Error('Not implemented')
})
