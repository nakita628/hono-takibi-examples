import { OpenAPIHono } from '@hono/zod-openapi'
import { deletePermissionsIdRoute, getPermissionsRoute, postPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const permissionsHandler = app
  .openapi(getPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePermissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
