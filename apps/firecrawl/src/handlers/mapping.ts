import { OpenAPIHono } from '@hono/zod-openapi'
import { postMapRoute } from '../routes'

const app = new OpenAPIHono()

export const mappingHandler = app.openapi(postMapRoute, (c) => {
  throw new Error('Not implemented')
})
