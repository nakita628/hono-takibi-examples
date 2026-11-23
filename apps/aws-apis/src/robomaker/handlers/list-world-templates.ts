import { OpenAPIHono } from '@hono/zod-openapi'
import { postListWorldTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const listWorldTemplatesHandler = app.openapi(postListWorldTemplatesRoute, (c) => {
  throw new Error('Not implemented')
})
