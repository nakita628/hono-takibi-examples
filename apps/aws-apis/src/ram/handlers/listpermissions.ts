import { OpenAPIHono } from '@hono/zod-openapi'
import { postListpermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const listpermissionsHandler = app.openapi(postListpermissionsRoute, (c) => {
  throw new Error('Not implemented')
})
