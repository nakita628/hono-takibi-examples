import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteSourceServerRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteSourceServerHandler = app.openapi(postDeleteSourceServerRoute, (c) => {
  throw new Error('Not implemented')
})
