import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetLastBlockNumberRoute } from '../routes'

const app = new OpenAPIHono()

export const getLastBlockNumberHandler = app.openapi(postGetLastBlockNumberRoute, (c) => {
  throw new Error('Not implemented')
})
