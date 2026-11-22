import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdRoute,
  getUsersRoute,
  getUsersUserIdConversationsRoute,
  getUsersUserIdRoute,
  postUsersRoute,
  putUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
