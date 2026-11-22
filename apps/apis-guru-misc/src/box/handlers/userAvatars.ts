import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdAvatarRoute,
  getUsersUserIdAvatarRoute,
  postUsersUserIdAvatarRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userAvatarsHandler = app
  .openapi(deleteUsersUserIdAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
