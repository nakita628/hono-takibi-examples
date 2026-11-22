import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionAccountUsersUsernameRoute,
  getApiVersionAccountUsersRoute,
  getApiVersionAccountUsersUsernameGrantsRoute,
  getApiVersionAccountUsersUsernameRoute,
  postApiVersionAccountUsersRoute,
  putApiVersionAccountUsersUsernameGrantsRoute,
  putApiVersionAccountUsersUsernameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postApiVersionAccountUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionAccountUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionAccountUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountUsersUsernameGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionAccountUsersUsernameGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
