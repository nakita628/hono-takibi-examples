import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInvitationsRoute,
  getUserRoute,
  getUsersIdCustomdataRoute,
  getUsersIdRoute,
  getUsersRoute,
  postUsersRoute,
  putUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserRoute, (c) => {
    throw new Error('Not implemented')
  })
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
