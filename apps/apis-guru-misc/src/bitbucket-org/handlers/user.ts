import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserEmailsEmailRoute,
  getUserEmailsRoute,
  getUserPermissionsRepositoriesRoute,
  getUserPermissionsWorkspacesRoute,
  getUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserEmailsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserPermissionsRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserPermissionsWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
