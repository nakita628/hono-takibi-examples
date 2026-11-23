import { OpenAPIHono } from '@hono/zod-openapi'
import { postPostRoute } from '../routes'

const app = new OpenAPIHono()

export const postHandler = app.openapi(postPostRoute, (c) => {
  throw new Error('Not implemented')
})
