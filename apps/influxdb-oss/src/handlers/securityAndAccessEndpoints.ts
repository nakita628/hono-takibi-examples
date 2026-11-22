import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersRoute,
  getUsersUserIDRoute,
  postSigninRoute,
  postSignoutRoute,
  postUsersUserIDPasswordRoute,
  putUsersUserIDPasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityAndAccessEndpointsHandler = app
  .openapi(postSigninRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIDPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIDPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
