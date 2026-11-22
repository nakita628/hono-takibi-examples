import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserEmailsEmailRoute,
  getUserEmailsRoute,
  getUserRoute,
  getUsersSelectedUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserEmailsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersSelectedUserRoute, (c) => {
    throw new Error('Not implemented')
  })
