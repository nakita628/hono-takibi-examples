import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdministratorRoute,
  postAdministratorDisassociateRoute,
  postAdministratorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const administratorHandler = app
  .openapi(postAdministratorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdministratorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdministratorDisassociateRoute, (c) => {
    throw new Error('Not implemented')
  })
