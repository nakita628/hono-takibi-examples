import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdPresenceRoute,
  getUsersUserIdPresenceRoute,
  patchUsersUserIdPresenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersPresenceHandler = app
  .openapi(deleteUsersUserIdPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
