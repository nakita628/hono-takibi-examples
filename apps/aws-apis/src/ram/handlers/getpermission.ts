import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetpermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const getpermissionHandler = app.openapi(postGetpermissionRoute, (c) => {
  throw new Error('Not implemented')
})
