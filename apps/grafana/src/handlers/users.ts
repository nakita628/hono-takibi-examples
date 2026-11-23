import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersLookupRoute,
  getUsersRoute,
  getUsersSearchRoute,
  getUsersUserIdOrgsRoute,
  getUsersUserIdRoute,
  getUsersUserIdTeamsRoute,
  putUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
