import { OpenAPIHono } from '@hono/zod-openapi'
import { postListpermissionassociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const listpermissionassociationsHandler = app.openapi(
  postListpermissionassociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
