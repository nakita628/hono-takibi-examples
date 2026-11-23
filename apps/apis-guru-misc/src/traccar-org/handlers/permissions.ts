import { OpenAPIHono } from '@hono/zod-openapi'
import { deletePermissionsRoute, postPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const permissionsHandler = app
  .openapi(deletePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
