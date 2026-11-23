import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreatepermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const createpermissionHandler = app.openapi(postCreatepermissionRoute, (c) => {
  throw new Error('Not implemented')
})
