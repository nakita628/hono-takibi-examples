import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiUsersIdJsonRoute,
  getApiUsersProfileJsonRoute,
  patchApiUsersIdJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getApiUsersProfileJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
