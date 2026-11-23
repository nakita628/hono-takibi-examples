import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetClipRoute } from '../routes'

const app = new OpenAPIHono()

export const getClipHandler = app.openapi(postGetClipRoute, (c) => {
  throw new Error('Not implemented')
})
