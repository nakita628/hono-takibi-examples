import { OpenAPIHono } from '@hono/zod-openapi'
import { postRemovebgRoute } from '../routes'

const app = new OpenAPIHono()

export const backgroundRemovalHandler = app.openapi(postRemovebgRoute, (c) => {
  throw new Error('Not implemented')
})
