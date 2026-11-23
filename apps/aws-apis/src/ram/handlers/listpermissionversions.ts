import { OpenAPIHono } from '@hono/zod-openapi'
import { postListpermissionversionsRoute } from '../routes'

const app = new OpenAPIHono()

export const listpermissionversionsHandler = app.openapi(postListpermissionversionsRoute, (c) => {
  throw new Error('Not implemented')
})
