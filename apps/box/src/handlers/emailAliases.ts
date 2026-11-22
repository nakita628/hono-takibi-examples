import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdEmailAliasesEmailAliasIdRoute,
  getUsersUserIdEmailAliasesRoute,
  postUsersUserIdEmailAliasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailAliasesHandler = app
  .openapi(getUsersUserIdEmailAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEmailAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdEmailAliasesEmailAliasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
