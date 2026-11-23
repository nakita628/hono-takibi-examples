import { OpenAPIHono } from '@hono/zod-openapi'
import { postMediaResourceNameRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app.openapi(postMediaResourceNameRoute, (c) => {
  throw new Error('Not implemented')
})
