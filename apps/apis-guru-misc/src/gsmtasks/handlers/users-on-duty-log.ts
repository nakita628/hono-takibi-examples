import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersOnDutyLogIdIndexRoute,
  getUsersOnDutyLogIndexRoute,
  postUsersOnDutyLogIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersOnDutyLogHandler = app
  .openapi(getUsersOnDutyLogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersOnDutyLogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersOnDutyLogIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
