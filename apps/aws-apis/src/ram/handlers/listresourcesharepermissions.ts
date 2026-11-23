import { OpenAPIHono } from '@hono/zod-openapi'
import { postListresourcesharepermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const listresourcesharepermissionsHandler = app.openapi(
  postListresourcesharepermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
