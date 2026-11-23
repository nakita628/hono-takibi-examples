import { OpenAPIHono } from '@hono/zod-openapi'
import { getServerRoute, putServerRoute } from '../routes'

const app = new OpenAPIHono()

export const serverHandler = app
  .openapi(getServerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServerRoute, (c) => {
    throw new Error('Not implemented')
  })
