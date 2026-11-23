import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersIdApplicationsRoute,
  getUsersIdRoute,
  getUsersUserIdGitInfoRoute,
  postUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdGitInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
