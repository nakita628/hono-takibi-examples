import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdAuthorizationRoute,
  deleteUsersUserIdRoute,
  postUsersUserIdLinkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(deleteUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
