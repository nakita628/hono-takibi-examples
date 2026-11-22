import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersUserIdPeopleCountRoute,
  getUsersUserIdPeoplePersonIdRoute,
  getUsersUserIdPeopleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersPersonHandler = app
  .openapi(getUsersUserIdPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPeoplePersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPeopleCountRoute, (c) => {
    throw new Error('Not implemented')
  })
