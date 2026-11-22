import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdministratorRoute, postAdministratorDisassociateRoute } from '../routes'

const app = new OpenAPIHono()

export const administratorHandler = app
  .openapi(postAdministratorDisassociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdministratorRoute, (c) => {
    throw new Error('Not implemented')
  })
