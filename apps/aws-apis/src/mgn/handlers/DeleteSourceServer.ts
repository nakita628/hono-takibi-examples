import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteSourceServerRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteSourceServerHandler = app.openapi(postDeleteSourceServerRoute, (c) => {
  throw new Error('Not implemented')
})
