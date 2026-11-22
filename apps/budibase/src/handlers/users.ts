import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdRoute,
  getUsersUserIdRoute,
  postUsersRoute,
  postUsersSearchRoute,
  putUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
