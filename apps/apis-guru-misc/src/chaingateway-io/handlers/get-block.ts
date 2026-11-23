import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetBlockRoute } from '../routes'

const app = new OpenAPIHono()

export const getBlockHandler = app.openapi(postGetBlockRoute, (c) => {
  throw new Error('Not implemented')
})
