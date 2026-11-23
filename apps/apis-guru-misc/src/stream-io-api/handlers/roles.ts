import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteRolesNameRoute, getRolesRoute, postRolesRoute } from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app
  .openapi(getRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
