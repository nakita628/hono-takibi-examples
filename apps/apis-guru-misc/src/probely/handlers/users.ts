import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersIdIndexRoute,
  getUsersIdIndexRoute,
  getUsersIndexRoute,
  patchUsersIdIndexRoute,
  postUsersIndexRoute,
  putUsersIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
