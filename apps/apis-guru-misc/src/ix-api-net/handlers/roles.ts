import { OpenAPIHono } from '@hono/zod-openapi'
import { getRolesIdRoute, getRolesRoute } from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app
  .openapi(getRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRolesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
