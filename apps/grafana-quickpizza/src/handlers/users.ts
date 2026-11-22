import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiAdminLoginRoute,
  postApiCsrfTokenRoute,
  postApiUsersRoute,
  postApiUsersTokenLoginRoute,
  postApiUsersTokenLogoutRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersTokenLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersTokenLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCsrfTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
