import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersIdCustomdataRoute,
  getUsersIdRoute,
  getUsersRoute,
  postUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdCustomdataRoute, (c) => {
    throw new Error('Not implemented')
  })
