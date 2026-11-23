import { OpenAPIHono } from '@hono/zod-openapi'
import { postRemovebgRoute } from '../routes'

const app = new OpenAPIHono()

export const removebgHandler = app.openapi(postRemovebgRoute, (c) => {
  throw new Error('Not implemented')
})
