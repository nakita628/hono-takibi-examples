import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersTotpDeleteUserIdRoute,
  postUsersInitiatePasswordResetUserIdFirstTimeResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postUsersInitiatePasswordResetUserIdFirstTimeResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersTotpDeleteUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
