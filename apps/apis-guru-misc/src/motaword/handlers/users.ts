import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersRoute,
  getUsersTagsRoute,
  postUsersAvailableVendorsRoute,
  postUsersFilterRoute,
  postUsersRoute,
  postUsersSendPasswordReminderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersAvailableVendorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersSendPasswordReminderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
