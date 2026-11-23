import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetMediaRoute } from '../routes'

const app = new OpenAPIHono()

export const getMediaHandler = app.openapi(postGetMediaRoute, (c) => {
  throw new Error('Not implemented')
})
