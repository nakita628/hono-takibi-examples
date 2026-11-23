import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersUserIdPlaylistsRoute,
  getUsersUserIdRoute,
  postUsersUserIdPlaylistsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
