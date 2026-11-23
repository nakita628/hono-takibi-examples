import { OpenAPIHono } from '@hono/zod-openapi'
import { postRolesAssignRoute, postRolesUnassignRoute } from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app
  .openapi(postRolesAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRolesUnassignRoute, (c) => {
    throw new Error('Not implemented')
  })
