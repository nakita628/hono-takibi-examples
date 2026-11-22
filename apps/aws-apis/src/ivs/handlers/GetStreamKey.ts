import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetStreamKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const GetStreamKeyHandler = app.openapi(postGetStreamKeyRoute, (c) => {
  throw new Error('Not implemented')
})
