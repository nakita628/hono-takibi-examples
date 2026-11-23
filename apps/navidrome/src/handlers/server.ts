import { OpenAPIHono } from '@hono/zod-openapi'
import { getServerRoute } from '../routes'

const app = new OpenAPIHono()

export const serverHandler = app.openapi(getServerRoute, (c) => {
  throw new Error('Not implemented')
})
