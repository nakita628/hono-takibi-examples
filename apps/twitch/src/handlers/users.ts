import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersBlocksRoute,
  getAuthorizationUsersRoute,
  getUsersBlocksRoute,
  getUsersExtensionsListRoute,
  getUsersExtensionsRoute,
  getUsersRoute,
  putUsersBlocksRoute,
  putUsersExtensionsRoute,
  putUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthorizationUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersExtensionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
